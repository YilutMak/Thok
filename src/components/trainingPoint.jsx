import ProgressBar from 'react-bootstrap/ProgressBar'
import { useUser } from '@/contexts/user'

function TrainingBar() {
  const {
    trainingPts: {
      trainingPoints
    }
  } = useUser()

  let maxPoints = 0

  if (trainingPoints < 100) {
    maxPoints = 100
  }

  if (trainingPoints < 200 && trainingPoints > 100) {
    maxPoints = 200
  }

  if (trainingPoints < 300 && trainingPoints > 200) {
    maxPoints = 300
  }

  if (trainingPoints < 400 && trainingPoints > 300) {
    maxPoints = 400
  }

  if (trainingPoints < 500 && trainingPoints > 400) {
    maxPoints = 500
  }

  if (trainingPoints < 600 && trainingPoints > 500) {
    maxPoints = 600
  }

  if (trainingPoints < 900 && trainingPoints > 600) {
    maxPoints = 900
  }

  if (trainingPoints < 1200 && trainingPoints > 900) {
    maxPoints = 1200
  }

  if (trainingPoints < 1700 && trainingPoints > 1200) {
    maxPoints = 1200
  }

  if (trainingPoints < 2000 && trainingPoints > 1700) {
    maxPoints = 2000
  }

  // console.log(maxPoints)

  const now = (trainingPoints / maxPoints) * 100
  return <ProgressBar now={now} label={`${trainingPoints}/${maxPoints}`} style={{ width: '300px', height: '20px' }} />
}

export default TrainingBar
