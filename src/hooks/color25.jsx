import axios from 'axios'
import { handleErrors } from '@/hooks/_utils'
import { useUser } from '@/contexts/user'

export default function useColor25() {
  const {
    setColor25,
    foundColor25
  } = useUser()

  const newColor25 = async (data) => {
    // console.log('new color 25:', data)
    try {
      const resp = await axios({
        method: 'POST',
        // url: `${process.env.API_URL}/api/my/colors`,
        url: '/api/my/color25',
        data
      })
      setColor25(resp.data)
      return resp.data
    } catch (err) {
      handleErrors(err)
      return null
    }
  }

  const getMyColor25 = async (data) => {
    try {
      const resp = await axios({
        method: 'GET',
        // url: `${process.env.API_URL}/api/my/profile`
        url: '/api/my/color25',
        params: {
          userId: data
        }
      })
      // console.log('resp color 25:', resp.data)
      foundColor25(resp.data)
      return resp.data
    } catch (err) {
      // handleErrors(err)
      return err.response.data
    }
  }

  return {
    newColor25,
    getMyColor25
  }
}
