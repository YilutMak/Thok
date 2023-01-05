import axios from 'axios'
import { handleErrors } from '@/hooks/_utils'
import { useUser } from '@/contexts/user'

export default function useCustom() {
  const {
    setCustom
  } = useUser()

  const newCustom = async (data) => {
    console.log('color:', data)
    try {
      const resp = await axios({
        method: 'POST',
        // url: `${process.env.API_URL}/api/my/color`,
        url: 'http://localhost:3000/api/my/custom',
        data
      })
      setCustom(resp.data)
      return resp.data
    } catch (err) {
      handleErrors(err)
      return null
    }
  }

  const getMyCustom = async (data) => {
    try {
      const resp = await axios({
        method: 'GET',
        // url: `${process.env.API_URL}/api/my/profile`
        url: 'http://localhost:3000/api/my/custom',
        params: {
          userId: data
        }
      })
      setCustom(resp.data.custom)
      return resp.data
    } catch (err) {
      handleErrors(err)
      return err.response.data
    }
  }

  return {
    newCustom,
    getMyCustom
  }
}
