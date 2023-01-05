import nc from '@/controllers/_helpers/nc'
import controllersApiMyCustomCreate from '@/controllers/my/custom/create'
import controllersApiMyCustomIndex from '@/controllers/my/custom/index'

export default nc()
  .post(controllersApiMyCustomCreate)
  .get(controllersApiMyCustomIndex)
