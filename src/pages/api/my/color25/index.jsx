import nc from '@/controllers/_helpers/nc'
import controllersApiMyColor25Create from '@/controllers/my/color25/create'
import controllersApiMyColor25Index from '@/controllers/my/color25/index'

export default nc()
  .post(controllersApiMyColor25Create)
  .get(controllersApiMyColor25Index)
