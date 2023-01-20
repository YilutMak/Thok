import axios from 'axios'
import { handleErrors } from '@/hooks/_utils'
import { useUser } from '@/contexts/user'

export default function useColor10() {
  const {
    setColor10,
    foundColor10
  } = useUser()

  const newColor10 = async (data) => {
    // console.log('color:', data)
    try {
      const resp = await axios({
        method: 'POST',
        // url: `${process.env.API_URL}/api/my/colors`,
        url: 'http://localhost:3000/api/my/color10',
        data
      })
      setColor10(resp.data)
      return resp.data
    } catch (err) {
      handleErrors(err)
      return null
    }
  }

  const getMyColor10 = async (data) => {
    // console.log('getcolor10:', data)
    try {
      const resp = await axios({
        method: 'GET',
        // url: `${process.env.API_URL}/api/my/profile`
        url: 'http://localhost:3000/api/my/color10',
        params: {
          userId: data
        }
      })
      // console.log(resp.data)
      foundColor10(resp.data)
      return resp.data
    } catch (err) {
      // handleErrors(err)
      return err.response.data
    }
  }

  return {
    newColor10,
    getMyColor10
  }
}
