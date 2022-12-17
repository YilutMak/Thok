import nc from '@/controllers/_helpers/nc'
import controllersApiMyTrialsCreate from '@/controllers/my/trials/create'
import controllersApiMyTrialsIndex from '@/controllers/my/trials/index'

export default nc()
  .post(controllersApiMyTrialsCreate)
  .get(controllersApiMyTrialsIndex)
