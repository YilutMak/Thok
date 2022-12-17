import nc from '@/controllers/_helpers/nc'
import controllersApiMyColorsCreate from '@/controllers/my/colors/create'
import controllersApiMyColorsIndex from '@/controllers/my/colors/index'

export default nc()
  .post(controllersApiMyColorsCreate)
  .get(controllersApiMyColorsIndex)
