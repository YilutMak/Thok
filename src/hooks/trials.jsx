import axios from 'axios'
import { renderErrors } from '@/contexts/_ultils'

export default function useTrials() {
  const logTrials = async (data) => {
    console.log('signup', data)
    try {
      const resp = await axios({
        method: 'POST',
        // url: `${process.env.API_URL}/api/auth/signup`,
        url: 'http://localhost:3000/api/my/trials',
        data
      })
      return resp.data
    } catch (err) {
      renderErrors(err)
      return null
    }
  }

  const getMyTrials = async () => {
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
    logTrials,
    getMyTrials
  }
}
