import axios from 'axios'

export async function apiGetExp() {
  const { data: { exp } } = await axios({
    method: 'GET',
    url: '/api/my/exp'
  })

  return exp
}
