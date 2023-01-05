import ProgressBar from 'react-bootstrap/ProgressBar'
import { useUser } from '@/contexts/user'

function SmallExpBar() {
  const {
    exp: {
      exp
    },
    lvl: {
      level
    },
    levelUpRate: {
      rate
    }
  } = useUser()

  const currentLvlExp = Math.ceil(5 * (rate ** (level)))
  const nextLvlExp = Math.ceil(5 * (rate ** (level + 1)))
  const nextLvlExpNeeded = nextLvlExp - currentLvlExp

  const now = Math.ceil(((exp - currentLvlExp) / nextLvlExpNeeded) * 100)
  // (exp / nextLvlExp) * 100
  return <ProgressBar now={now} label="" style={{ width: '100%', height: '5px' }} />
}

export default SmallExpBar
