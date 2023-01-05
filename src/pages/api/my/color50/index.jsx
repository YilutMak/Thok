import nc from '@/controllers/_helpers/nc'
import controllersApiMyColor50Create from '@/controllers/my/color50/create'
import controllersApiMyColor50Index from '@/controllers/my/color50/index'

export default nc()
  .post(controllersApiMyColor50Create)
  .get(controllersApiMyColor50Index)
