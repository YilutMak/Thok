import handleErrors from '@/controllers/_helpers/handleErrors'
import nc from '@/controllers/_helpers/nc'
import prisma from '@/controllers/_helpers/prisma'

const controllersApiMyTrainingPtsIndex = async (req, res) => {
  try {
    const {
      query: {
        userId
      }
    } = req

    const foundMyTrainingPTs = await prisma.trainingPTs.findUnique({
      where: {
        userId
      }
    })

    return res.status(200).json({
      trainingPoints: foundMyTrainingPTs
    })
  } catch (err) {
    return handleErrors(res, err)
  }
}

export default nc()
  .use(controllersApiMyTrainingPtsIndex)
