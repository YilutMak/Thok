import handleErrors from '@/controllers/_helpers/handleErrors'
import nc from '@/controllers/_helpers/nc'
import prisma from '@/controllers/_helpers/prisma'

const controllersApiMyColor50Index = async (req, res) => {
  try {
    const {
      query: {
        userId
      }
    } = req

    const foundMyColors = await prisma.color50.findUnique({
      where: {
        userId
      }
    })

    return res.status(200).json({
      color50: foundMyColors
    })
  } catch (err) {
    return handleErrors(res, err)
  }
}

export default nc()
  .use(controllersApiMyColor50Index)
