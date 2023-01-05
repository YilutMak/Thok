import axios from 'axios'
import { handleErrors } from '@/hooks/_utils'
import { useUser } from '@/contexts/user'

export default function useColor50() {
  const {
    setColor50,
    foundColor50
  } = useUser()

  const newColor50 = async (data) => {
    // console.log('color:', data)
    try {
      const resp = await axios({
        method: 'POST',
        // url: `${process.env.API_URL}/api/my/colors`,
        url: 'http://localhost:3000/api/my/color50',
        data
      })
      setColor50(resp.data)
      return resp.data
    } catch (err) {
      handleErrors(err)
      return null
    }
  }

  const getMyColor50 = async (data) => {
    try {
      const resp = await axios({
        method: 'GET',
        // url: `${process.env.API_URL}/api/my/profile`
        url: 'http://localhost:3000/api/my/color50',
        params: {
          userId: data
        }
      })
      foundColor50(resp.data)
      return resp.data
    } catch (err) {
      // handleErrors(err)
      return err.response.data
    }
  }

  return {
    newColor50,
    getMyColor50
  }
}
