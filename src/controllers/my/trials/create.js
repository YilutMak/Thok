import yup from 'yup'
import handleErrors from '@/controllers/_helpers/handleErrors'
import nc from '@/controllers/_helpers/nc'
import prisma from '@/controllers/_helpers/prisma'

const createSchema = yup.object({
  symbol: yup.string().required()
})

const controllersApiMyTrialsCreate = async (req, res) => {
  console.log(req.body)

  try {
    const { body: symbol, session: { user: { id: userId } } } = req
    const verifiedData = await createSchema.validate(symbol, { abortEarly: false, stripUnknown: true })
    const newStock = await prisma.stocks.create({ data: { ...verifiedData, userId } })
    return res.status(201).json(newStock)
  } catch (err) {
    console.error(err)
    return handleErrors(res, err)
  }
}

export default nc()
  .use(controllersApiMyTrialsCreate)
