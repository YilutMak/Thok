import axios from 'axios'
import { renderErrors } from '@/contexts/_ultils'

export default function useTraining() {
  const getMyProfile = async () => {
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
    getMyProfile
  }
}
