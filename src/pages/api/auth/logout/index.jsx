import nc from '@/controllers/_helpers/nc'
import controllersApiAuth from '@/controllers/auth/logout'

export default nc()
  .delete(controllersApiAuth)
