import ProgressBar from 'react-bootstrap/ProgressBar'
// import { useEffect } from 'react'
import { useUser } from '@/contexts/user'
import { useEffect } from 'react'

import { useCheckTyped } from '@/contexts/checkTyped'
import { useRouter } from 'next/router'

function HealthBar() {
  const { push } = useRouter()

  const {
    health: {
      hp
    }
  } = useUser()

  const {
    updateLost
  } = useCheckTyped()

  const {
    errorsWords: {
      errors
    }
  } = useCheckTyped()

  const hpLeft = hp - errors.length

  useEffect(() => {
    if (hpLeft <= 0) {
      // console.log('you died')
      updateLost(true)
      push('/lost')
    }
  }, [errors])

  const now = (hpLeft / hp) * 100
  return <ProgressBar now={now} style={{ width: '200px', height: '10px' }} />
}

export default HealthBar
