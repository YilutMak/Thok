import handleErrors from '@/controllers/_helpers/handleErrors'
import nc from '@/controllers/_helpers/nc'
import prisma from '@/controllers/_helpers/prisma'

const controllersApiMyColor10Create = async (req, res) => {
  // console.log('request:', req.body)

  try {
    const {
      body: {
        userId,
        color
      }
    } = req

    const newColor = await prisma.color10.upsert({
      where: {
        userId
      },
      update: {
        color
      },
      create: {
        userId,
        color
      }
    })

    return res.status(201).json(newColor)
  } catch (err) {
    // console.error(err)
    return handleErrors(res, err)
  }
}

export default nc()
  .use(controllersApiMyColor10Create)
