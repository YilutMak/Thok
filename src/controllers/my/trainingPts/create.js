import handleErrors from '@/controllers/_helpers/handleErrors'
import nc from '@/controllers/_helpers/nc'
import prisma from '@/controllers/_helpers/prisma'

const controllersApiMyTrainingPtsCreate = async (req, res) => {
  // console.log('request:', req.body)

  try {
    const {
      body: {
        userId,
        trainingPts
      }
    } = req

    const newTrainingPts = await prisma.TrainingPTs.upsert({
      where: {
        userId
      },
      update: {
        trainingPts
      },
      create: {
        userId,
        trainingPts
      }
    })

    return res.status(201).json(newTrainingPts)
  } catch (err) {
    // console.error(err)
    return handleErrors(res, err)
  }
}

export default nc()
  .use(controllersApiMyTrainingPtsCreate)
