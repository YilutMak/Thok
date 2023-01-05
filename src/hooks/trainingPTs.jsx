import axios from 'axios'
import { handleErrors } from '@/hooks/_utils'
import { useUser } from '@/contexts/user'

export default function useTrainingPTs() {
  const {
    setTrainingPts
  } = useUser()

  const newTrainingPts = async (data) => {
    // console.log('TrainingPTs:', data)
    try {
      const resp = await axios({
        method: 'POST',
        // url: `${process.env.API_URL}/api/my/color`,
        url: 'http://localhost:3000/api/my/trainingPts',
        data
      })
      // console.log('resp training pts:', resp.data)
      setTrainingPts(resp.data)
      return resp.data
    } catch (err) {
      handleErrors(err.response)
      return null
    }
  }

  const getMytrainingPts = async (data) => {
    try {
      const resp = await axios({
        method: 'GET',
        // url: `${process.env.API_URL}/api/my/profile`
        url: 'http://localhost:3000/api/my/trainingPts',
        params: {
          userId: data
        }
      })
      // console.log(resp.data.trainingPoints)
      setTrainingPts(resp.data.trainingPoints)
      return resp.data
    } catch (err) {
      handleErrors(err.response)
      return err.response.data
    }
  }

  return {
    newTrainingPts,
    getMytrainingPts
  }
}
