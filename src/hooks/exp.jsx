import axios from 'axios'
import { handleErrors } from '@/hooks/_utils'
import { useUser } from '@/contexts/user'

export default function useExp() {
  const {
    setExp
  } = useUser()

  const newExp = async (data) => {
    console.log('exp:', data)
    try {
      const resp = await axios({
        method: 'POST',
        // url: `${process.env.API_URL}/api/my/exp`,
        url: 'http://localhost:3000/api/my/exp',
        data
      })
      setExp(resp.data)
      return resp.data
    } catch (err) {
      handleErrors(err)
      return null
    }
  }

  const getMyExp = async (data) => {
    // console.log('id:', data)
    try {
      const resp = await axios({
        method: 'GET',
        // url: `${process.env.API_URL}/api/my/profile`
        url: 'http://localhost:3000/api/my/exp',
        params: {
          userId: data
        }
      })
      setExp(resp.data)
      return resp.data
    } catch (err) {
      // renderErrors(err)
      handleErrors(err.response)
      return err.response.data
    }
  }

  return {
    newExp,
    getMyExp
  }
}
