import axios from 'axios'
import { handleErrors } from '@/hooks/_utils'
import { useUser } from '@/contexts/user'

export default function useColors() {
  const {
    setColors
  } = useUser()

  const newColor = async (data) => {
    // console.log('color:', data)
    try {
      const resp = await axios({
        method: 'POST',
        // url: `${process.env.API_URL}/api/my/colors`,
        url: '/api/my/colors',
        data
      })
      setColors(resp.data)
      return resp.data
    } catch (err) {
      handleErrors(err)
      return null
    }
  }

  const getMyColors = async (data) => {
    try {
      const resp = await axios({
        method: 'GET',
        // url: `${process.env.API_URL}/api/my/profile`
        url: '/api/my/colors',
        params: {
          userId: data
        }
      })
      setColors(resp.data)
      return resp.data
    } catch (err) {
      // handleErrors(err)
      return err.response.data
    }
  }

  return {
    newColor,
    getMyColors
  }
}
