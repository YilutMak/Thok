import nc from '@/controllers/_helpers/nc'
import controllersApiAuthLogin from '@/controllers/auth/login'

export default nc()
  .post(controllersApiAuthLogin)
