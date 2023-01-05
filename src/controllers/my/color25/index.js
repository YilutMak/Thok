import handleErrors from '@/controllers/_helpers/handleErrors'
import nc from '@/controllers/_helpers/nc'
import prisma from '@/controllers/_helpers/prisma'

const controllersApiMyColor25Index = async (req, res) => {
  try {
    const {
      query: {
        userId
      }
    } = req

    const foundMyColors = await prisma.color25.findUnique({
      where: {
        userId
      }
    })

    return res.status(200).json({
      color25: foundMyColors
    })
  } catch (err) {
    return handleErrors(res, err)
  }
}

export default nc()
  .use(controllersApiMyColor25Index)
