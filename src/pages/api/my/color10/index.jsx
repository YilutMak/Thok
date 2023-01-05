import nc from '@/controllers/_helpers/nc'
import controllersApiMyColor10Create from '@/controllers/my/color10/create'
import controllersApiMyColor10Index from '@/controllers/my/color10/index'

export default nc()
  .post(controllersApiMyColor10Create)
  .get(controllersApiMyColor10Index)
