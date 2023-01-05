import yup from 'yup'
import handleErrors from '@/controllers/_helpers/handleErrors'
import nc from '@/controllers/_helpers/nc'
import prisma from '@/controllers/_helpers/prisma'

const controllersApiMyTrialsCreate = async (req, res) => {
  console.log('request:', req.body)
  try {
    const {
      body: {
        userId,
        wordCount,
        punctuation,
        number,
        wpm,
        acc,
        time,
        characters,
        passage,
        error
      }
    } = req

    const newTraining = await prisma.trials.create({ data: {
      userId,
      wordCount,
      punctuation,
      number,
      wpm,
      acc,
      time,
      characters,
      passage,
      error
    } })

    return res.status(201).json(newTraining)
  } catch (err) {
    console.error(err)
    return handleErrors(res, err)
  }
}

export default nc()
  .use(controllersApiMyTrialsCreate)
