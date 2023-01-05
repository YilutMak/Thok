import nc from '@/controllers/_helpers/nc'
import controllersApiMyExpCreate from '@/controllers/my/exp/create'
import controllersApiMyExpIndex from '@/controllers/my/exp/index'

export default nc()
  .post(controllersApiMyExpCreate)
  .get(controllersApiMyExpIndex)
