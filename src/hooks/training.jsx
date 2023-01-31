import axios from 'axios'
import { renderErrors } from '@/contexts/_ultils'
import { useUser } from '@/contexts/user'

export default function useTraining() {
  const {
    setTrainingLog
  } = useUser()

  const logTraining = async (data) => {
    // console.log('training', data)
    try {
      const resp = await axios({
        method: 'POST',
        // url: `${process.env.API_URL}/api/auth/signup`,
        url: '/api/my/training',
        data
      })
      return resp.data
    } catch (err) {
      renderErrors(err)
      return null
    }
  }

  const getMyTraining = async (data) => {
    // console.log('my training:', data)
    try {
      const resp = await axios({
        method: 'GET',
        // url: `${process.env.API_URL}/api/my/profile`
        url: '/api/my/training',
        params: {
          userId: data
        }
      })
      // console.log(resp.data)
      setTrainingLog(resp.data)
      return resp.data
    } catch (err) {
      renderErrors(err)
      return err.response.data
    }
  }

  return {
    logTraining,
    getMyTraining
  }
}
