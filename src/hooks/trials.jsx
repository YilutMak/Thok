import axios from 'axios'
import { renderErrors } from '@/contexts/_ultils'
import { useUser } from '@/contexts/user'

export default function useTrials() {
  const {
    setTrialsLog
  } = useUser()

  const logTrials = async (data) => {
    // console.log('trials:', data)
    try {
      const resp = await axios({
        method: 'POST',
        // url: `${process.env.API_URL}/api/auth/signup`,
        url: '/api/my/trials',
        data
      })
      return resp.data
    } catch (err) {
      renderErrors(err)
      return null
    }
  }

  const getMyTrials = async (data) => {
    // console.log('my trials:', data)
    try {
      const resp = await axios({
        method: 'GET',
        // url: `${process.env.API_URL}/api/my/profile`
        url: '/api/my/trials',
        params: {
          userId: data
        }
      })
      setTrialsLog(resp.data)
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
