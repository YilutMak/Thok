import nc from '@/controllers/_helpers/nc'
import controllersApiMyTrainingPtsCreate from '@/controllers/my/trainingPts/create'
import controllersApiMyTrainingPtsIndex from '@/controllers/my/trainingPts/index'

export default nc()
  .post(controllersApiMyTrainingPtsCreate)
  .get(controllersApiMyTrainingPtsIndex)
