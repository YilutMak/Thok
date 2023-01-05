import handleErrors from '@/controllers/_helpers/handleErrors'
import nc from '@/controllers/_helpers/nc'
import prisma from '@/controllers/_helpers/prisma'

const controllersApiMyColor10Index = async (req, res) => {
  try {
    const {
      query: {
        userId
      }
    } = req

    const foundMyColors = await prisma.color10.findUnique({
      where: {
        userId
      }
    })

    return res.status(200).json({
      color10: foundMyColors
    })
  } catch (err) {
    return handleErrors(res, err)
  }
}

export default nc()
  .use(controllersApiMyColor10Index)
