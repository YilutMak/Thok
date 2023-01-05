import handleErrors from '@/controllers/_helpers/handleErrors'
import nc from '@/controllers/_helpers/nc'
import prisma from '@/controllers/_helpers/prisma'

const controllersApiMyCustomCreate = async (req, res) => {
  console.log('request:', req.body)

  try {
    const {
      body: {
        userId,
        outline,
        fill
      }
    } = req

    const newCustom = await prisma.custom.upsert({
      where: {
        userId
      },
      update: {
        outline,
        fill
      },
      create: {
        userId,
        outline,
        fill
      }
    })

    return res.status(201).json(newCustom)
  } catch (err) {
    console.error(err)
    return handleErrors(res, err)
  }
}

export default nc()
  .use(controllersApiMyCustomCreate)
