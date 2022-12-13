import axios from 'axios'
import { renderErrors } from '@/contexts/_ultils'

export async function getMyProfile() {
  try {
    const resp = await axios({
      method: 'GET',
      // url: `${process.env.API_URL}/api/my/profile`
      url: 'http://localhost:3000/api/my/profile'
    })
    return resp.data
  } catch (err) {
    return err.response.data
  }
}

export async function signup(data) {
  try {
    const resp = await axios({
      method: 'POST',
      // url: `${process.env.API_URL}/api/auth/signup`,
      url: 'http://localhost:3000/api/auth/signup',
      data
    })
    return resp.data
  } catch (err) {
    renderErrors(err)
    return null
  }
}

export async function login(data) {
  try {
    const resp = await axios({
      method: 'POST',
      // url: `${process.env.API_URL}/api/auth/login`,
      url: 'http://localhost:3000/api/auth/login',
      data
    })
    return resp.data
  } catch (err) {
    renderErrors(err)
    return null
  }
}

export async function logout() {
  try {
    await axios({
      method: 'DELETE',
      // url: `${process.env.API_URL}/api/auth/logout`,
      url: 'http://localhost:3000/api/auth/logout'
    })
    return null
  } catch (err) {
    renderErrors(err)
    return null
  }
}
