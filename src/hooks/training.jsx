import axios from 'axios'
import { renderErrors } from '@/contexts/_ultils'

export default function useTraining() {
  const logTraining = async (data) => {
    console.log('training', data)
    try {
      const resp = await axios({
        method: 'POST',
        // url: `${process.env.API_URL}/api/auth/signup`,
        url: 'http://localhost:3000/api/my/training',
        data
      })
      return resp.data
    } catch (err) {
      renderErrors(err)
      return null
    }
  }

  const getMyTraining = async () => {
    try {
      const resp = await axios({
        method: 'GET',
        // url: `${process.env.API_URL}/api/my/profile`
        url: 'http://localhost:3000/api/my/profile'
      })
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
