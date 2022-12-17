import handleErrors from '@/controllers/_helpers/handleErrors'
import nc from '@/controllers/_helpers/nc'
import prisma from '@/controllers/_helpers/prisma'

const controllersApiMyColorsIndex = async (req, res) => {
  try {
    const { session: { user: { id: userId } } } = req

    // Common Where Query
    const where = {
      userId
    }

    const foundMyStocks = await prisma.stocks.findMany({
      where
    })

    return res.status(200).json({
      stocks: foundMyStocks
    })
  } catch (err) {
    return handleErrors(res, err)
  }
}

export default nc()
  .use(controllersApiMyColorsIndex)
