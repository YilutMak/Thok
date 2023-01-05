import handleErrors from '@/controllers/_helpers/handleErrors'
import nc from '@/controllers/_helpers/nc'
import prisma from '@/controllers/_helpers/prisma'

const controllersApiMyTrialsIndex = async (req, res) => {
  try {
    const {
      query: {
        userId
      }
    } = req

    // Common Where Query
    const where = {
      userId
    }

    const foundMyTrials = await prisma.trials.findMany({
      where
    })

    return res.status(200).json({
      trials: foundMyTrials
    })
  } catch (err) {
    return handleErrors(res, err)
  }
}

export default nc()
  .use(controllersApiMyTrialsIndex)
