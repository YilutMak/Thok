import ProgressBar from 'react-bootstrap/ProgressBar'
import { useUser } from '@/contexts/user'

function ExpBar() {
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

  // console.log('exp rate:', rate)
  // console.log('lvl:', level)
  // console.log('last lvl exp:', currentLvlExp)
  // console.log('exp:', exp)
  // console.log('next lvl exp:', nextLvlExp)
  // console.log('exp needed to reach next level:', nextLvlExpNeeded)

  const now = Math.ceil(((exp - currentLvlExp) / nextLvlExpNeeded) * 100)

  // (exp / nextLvlExp) * 100
  return <ProgressBar now={now} label={`${Math.ceil(((exp - currentLvlExp) / nextLvlExpNeeded) * 100)}%`} style={{ width: '200px', height: '10px' }} />
}

export default ExpBar

// Math.floor()

// 11,24,39,56,75,96,119,144
// 15,25,45
