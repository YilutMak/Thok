import handleErrors from '@/controllers/_helpers/handleErrors'
import nc from '@/controllers/_helpers/nc'
import prisma from '@/controllers/_helpers/prisma'

const controllersApiMyTrainingIndex = async (req, res) => {
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

    const foundMyTraining = await prisma.training.findMany({
      where
    })

    return res.status(200).json({
      training: foundMyTraining
    })
  } catch (err) {
    return handleErrors(res, err)
  }
}

export default nc()
  .use(controllersApiMyTrainingIndex)
