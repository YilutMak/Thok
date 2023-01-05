import handleErrors from '@/controllers/_helpers/handleErrors'
import nc from '@/controllers/_helpers/nc'
import prisma from '@/controllers/_helpers/prisma'

const controllersApiMyExpIndex = async (req, res) => {
  try {
    const {
      query: {
        userId
      }
    } = req

    const foundMyExp = await prisma.exp.findUnique({
      where: {
        userId
      }
    })

    return res.status(200).json(foundMyExp)
  } catch (err) {
    return handleErrors(res, err)
  }
}

export default nc()
  .use(controllersApiMyExpIndex)
