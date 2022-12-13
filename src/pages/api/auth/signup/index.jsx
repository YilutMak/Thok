import nc from '@/controllers/_helpers/nc'
import controllersApiAuthSignup from '@/controllers/auth/signup'

export default nc()
  .post(controllersApiAuthSignup)
