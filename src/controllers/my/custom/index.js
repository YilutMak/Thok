import handleErrors from '@/controllers/_helpers/handleErrors'
import nc from '@/controllers/_helpers/nc'
import prisma from '@/controllers/_helpers/prisma'

const controllersApiMyCustomIndex = async (req, res) => {
  try {
    const {
      query: {
        userId
      }
    } = req

    const foundMyCustom = await prisma.custom.findUnique({
      where: {
        userId
      }
    })

    return res.status(200).json({
      custom: foundMyCustom
    })
  } catch (err) {
    return handleErrors(res, err)
  }
}

export default nc()
  .use(controllersApiMyCustomIndex)
