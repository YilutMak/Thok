import axios from 'axios'

export async function apiGetExp() {
  const { data: { exp } } = await axios({
    method: 'GET',
    url: 'http://localhost:3000/api/my/exp'
  })

  return exp
}
