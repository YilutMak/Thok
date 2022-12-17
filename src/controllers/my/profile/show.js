import _ from 'lodash'
import handleErrors from '@/controllers/_helpers/handleErrors'
import nc from '@/controllers/_helpers/nc'
import prisma from '@/controllers/_helpers/prisma'

const controllersApiMyProfileShow = async (req, res) => {
  try {
    const { session: { user: { id } } } = req

    const foundUser = await prisma.user.findUnique({ where: { id: Number(id) }, rejectOnNotFound: true })
    return res.status(200).json(_.omit(foundUser, ['passwordHash']))
  } catch (err) {
    return handleErrors(res, err)
  }
}

export default nc()
  .use(controllersApiMyProfileShow)
