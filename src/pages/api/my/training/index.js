import nc from '@/controllers/_helpers/nc'
import controllersApiMyTrainingCreate from '@/controllers/my/training/create'
import controllersApiMyTrainingIndex from '@/controllers/my/training/index'

export default nc()
  .post(controllersApiMyTrainingCreate)
  .get(controllersApiMyTrainingIndex)
