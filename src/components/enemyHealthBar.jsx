import ProgressBar from 'react-bootstrap/ProgressBar'
// import { useEffect } from 'react'
// import { useUser } from '@/contexts/user'
import { useEffect } from 'react'
import { useGenPhrase } from '@/contexts/genPhrase'
import { useCheckTyped } from '@/contexts/checkTyped'

function EnemyHealthBar() {
  const {
    checkTyped: {
      wordStatus
    },
    timer: {
      wordTimestamps
    }
  } = useCheckTyped()

  const {
    genPhraseLength: {
      phraseLength
    }
  } = useGenPhrase()

  useEffect(() => {
    // console.log('words:', wordTimestamps.length)
  }, [wordStatus])

  const wordsCompleted = wordTimestamps.length

  const now = (((phraseLength - wordsCompleted) / phraseLength) + 0.01) * 100
  return <ProgressBar now={now} style={{ width: '200px', height: '10px' }} />
}

export default EnemyHealthBar
