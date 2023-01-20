import handleErrors from '@/controllers/_helpers/handleErrors'
import nc from '@/controllers/_helpers/nc'
import prisma from '@/controllers/_helpers/prisma'

const controllersApiMyExpCreate = async (req, res) => {
  // console.log('request:', req.body)

  try {
    const {
      body: {
        userId,
        exp
      }
    } = req

    const newExp = await prisma.exp.upsert({
      where: {
        userId
      },
      update: {
        exp
      },
      create: {
        userId,
        exp
      }
    })

    return res.status(201).json(newExp)
  } catch (err) {
    // console.error(err)
    return handleErrors(res, err)
  }
}

export default nc()
  .use(controllersApiMyExpCreate)
