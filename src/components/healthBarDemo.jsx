import ProgressBar from 'react-bootstrap/ProgressBar'
// import { useEffect } from 'react'
import Timer from '@/hooks/timer'
import { useGenPhrase } from '@/contexts/genPhrase'
import { useCheckTyped } from '@/contexts/checkTyped'

function HealthBar() {
  const {
    errorsWords: {
      errors
    }
  } = useCheckTyped()

  const {
    resetPhrase
  } = Timer()

  const {
    newPhrase
  } = useGenPhrase()

  const hp = 3
  const hpLeft = hp - errors.length

  const now = (hpLeft / hp) * 100
  return <ProgressBar now={now} style={{ width: '200px', height: '10px' }} />
}

export default HealthBar
