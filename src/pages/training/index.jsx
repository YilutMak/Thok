import { useEffect } from 'react'
import { useGenPhrase } from '@/contexts/genPhrase'
import PhraseModule from '@/components/phrase'
import { useCheckTyped } from '@/contexts/checkTyped'
import Timer from '@/hooks/timer'
import useTraining from '@/hooks/training'
import useExp from '@/hooks/exp'
import { useSession } from 'next-auth/react'
import { useUser } from '@/contexts/user'
import HealthBar from '@/components/healthBar'
import Avatar from '@/components/avatar'
import ExpBar from '@/components/expBar'
import TrainingBar from '@/components/trainingPoint'
import useTrainingPTs from '@/hooks/trainingPTs'
import moment from 'moment'

export default function Training() {
  const { data: session } = useSession()

  const {
    passage: { joinedPhrase },
    genPhraseLength: { phraseLength, phraseNumber, phrasePunctuation },
    setWordCount,
    setPhraseNumber,
    setPhrasePunctuation,
    newPhrase
  } = useGenPhrase()

  const {
    exp: {
      exp
    },
    trainingPts: {
      trainingPoints
    },
    // customize:
    // {
    //   outline,
    //   fill
    // },
    lvl: {
      level
    }
  } = useUser()

  const {
    timer: {
      running,
      completedPhrase
    },
    errorsWords: {
      errors
    },
    typingAccuracy: {
      acc,
      totalChars
    },
    typingSpeed: {
      completeTime,
      wpm
    },
    prevStats: {
      prevPhrase,
      haveNum,
      havePunc,
      prevWpm,
      prevTime,
      prevErrors,
      prevChars,
      prevAcc,
      prevTimestamps
    },
    updateLost
  } = useCheckTyped()

  const {
    logTraining
  } = useTraining()

  const {
    newTrainingPts
  } = useTrainingPTs()

  const {
    newExp
  } = useExp()

  const {
    resetPhrase
  } = Timer()

  useEffect(() => {
    updateLost(false)
    newPhrase(10, false, false)
  }, [])

  useEffect(() => {
    resetPhrase()
    if (session) {
      console.log('completedPhrase:', completedPhrase)
      // console.log(session.user.id)
      if (completedPhrase === true) {
        // console.log('phrase:', joinedPhrase, 'phraseNumber:', phraseNumber, 'phrasePunctuation:', phrasePunctuation, 'wpm:', wpm, 'time:', completeTime, 'errors:', errors, 'total char count', totalChars, 'acc:', acc)

        // log training data
        const trainingLog = {
          userId: session.user.id,
          wordCount: phraseLength,
          punctuation: phrasePunctuation,
          number: phraseNumber,
          wpm,
          acc,
          time: completeTime,
          characters: totalChars,
          passage: joinedPhrase.join(),
          error: errors.join()
        }
        logTraining(trainingLog)

        // log exp points
        let wordsExp = 0
        switch (phraseLength) {
          case 10:
            wordsExp = 5
            break
          case 25:
            wordsExp = 10
            break
          case 50:
            wordsExp = 25
            break
          default:
            break
        }
        const numberExp = phraseNumber ? 5 : 0
        const PunctuationExp = phrasePunctuation ? 5 : 0
        const earnedPoints = wordsExp + numberExp + PunctuationExp
        const experiencePoints = exp + earnedPoints

        const expLog = {
          userId: session.user.id,
          exp: experiencePoints
        }
        newExp(expLog)

        // log training data
        const trainingPt = earnedPoints + trainingPoints

        // console.log('trainingPt:', trainingPt)
        const trainingPointsLog = {
          userId: session.user.id,
          trainingPts: trainingPt
        }
        newTrainingPts(trainingPointsLog)
      }
    }
  }, [running])

  const checkTrainingReward = () => {
    if (trainingPoints < 100) {
      return <div className=" p-0 m-1" style={{ height: '30px', width: '30px', backgroundColor: '#2d9bf0ff', borderRadius: '15px' }} />
    }
    if (trainingPoints < 200 && trainingPoints >= 100) {
      return <div className=" p-0 m-1" style={{ height: '30px', width: '30px', backgroundColor: '#eeda94ff', borderRadius: '15px' }} />
    }
    if (trainingPoints < 300 && trainingPoints >= 200) {
      return <div className=" p-0 m-1" style={{ height: '30px', width: '30px', backgroundColor: '#ffdcdc', borderRadius: '15px' }} />
    }
    if (trainingPoints < 400 && trainingPoints >= 300) {
      return <div className=" p-0 m-1" style={{ height: '30px', width: '30px', backgroundColor: '#69737b', borderRadius: '15px' }} />
    }
    if (trainingPoints < 500 && trainingPoints >= 400) {
      return <div className=" p-0 m-1" style={{ height: '30px', width: '30px', backgroundColor: '#e7f963', borderRadius: '15px' }} />
    }
    if (trainingPoints < 600 && trainingPoints > 500) {
      return <div className=" p-0 m-1" style={{ height: '30px', width: '30px', backgroundColor: '#b872c6', borderRadius: '15px' }} />
    }
    if (trainingPoints < 900 && trainingPoints >= 600) {
      return <div className=" p-0 m-1" style={{ height: '30px', width: '30px', backgroundColor: '#f85e45', borderRadius: '15px' }} />
    }
    if (trainingPoints < 1200 && trainingPoints >= 900) {
      return <div className=" p-0 m-1" style={{ height: '30px', width: '30px', backgroundColor: '#88fdc3', borderRadius: '15px' }} />
    }
    if (trainingPoints < 1700 && trainingPoints >= 1200) {
      return <div className=" p-0 m-1" style={{ height: '30px', width: '30px', backgroundColor: '#ffb757', borderRadius: '15px' }} />
    }
    if (trainingPoints < 2000 && trainingPoints >= 1700) {
      return <div className=" p-0 m-1" style={{ height: '30px', width: '30px', backgroundColor: '#f650b2', borderRadius: '15px' }} />
    }
    if (trainingPoints > 2000) {
      return <h4>null</h4>
    }
  }

  const checkWordCount = (data) => {
    if (data === 10 && phraseLength === 10) {
      return '#88bdcb'
    }
    if (data === 25 && phraseLength === 25) {
      return '#88bdcb'
    }
    if (data === 50 && phraseLength === 50) {
      return '#88bdcb'
    }
    return '#bccdd2'
  }

  const checkNumPunc = (data) => {
    if (phraseNumber === true && data === 'num') {
      return '#88bdcb'
    }
    if (phrasePunctuation === true && data === 'punc') {
      return '#88bdcb'
    }
    return '#bccdd2'
  }

  return (
    <>
      <div className="d-flex row mb-3 mx-auto text-center" style={{ width: '100%', marginTop: '30px', color: '#787777' }}>
        <h1>Training</h1>
      </div>

      <div className="row mx-auto" style={{ width: '800px' }}>
        <div className="col" style={{ width: '400px' }}>

          <div className="col" style={{ marginLeft: '100px' }}>
            <button className="row mb-2 mx-0 p-0" type="button" onClick={() => setWordCount(10)} style={{ width: '50px', height: '50px', borderRadius: '50%', background: checkWordCount(10), border: 'none' }}>
              <div style={{ paddingLeft: '12px', marginTop: '12px', color: 'white' }}>10</div>
            </button>
            <button className="row mb-2 mx-0 p-0" type="button" onClick={() => setWordCount(25)} style={{ width: '50px', height: '50px', borderRadius: '50%', background: checkWordCount(25), border: 'none' }}>
              <div style={{ paddingLeft: '12px', marginTop: '12px', color: 'white' }}>25</div>
            </button>
            <button className="row mb-2 mx-0 p-0" type="button" onClick={() => setWordCount(50)} style={{ width: '50px', height: '50px', borderRadius: '50%', background: checkWordCount(50), border: 'none' }}>
              <div style={{ paddingLeft: '12px', marginTop: '12px', color: 'white' }}>50</div>
            </button>
            <button className="row mb-2 mx-0 p-0 " type="button" onClick={() => setPhraseNumber(phraseNumber)} style={{ width: '50px', height: '50px', borderRadius: '50%', background: checkNumPunc('num'), border: 'none' }}>
              <div style={{ marginRight: '0px', marginTop: '12px', paddingLeft: '9px', color: 'white' }}>num</div>
            </button>
            <button className="row mb-2 mx-0 p-0 " type="button" onClick={() => setPhrasePunctuation(phrasePunctuation)} style={{ width: '50px', height: '50px', borderRadius: '50%', background: checkNumPunc('punc'), border: 'none' }}>
              <div style={{ paddingLeft: '7px', marginTop: '12px', color: 'white' }}>Punc</div>
            </button>
          </div>
        </div>

        <div className="col mx-5 ">
          <Avatar />
          <div style={{ marginTop: '20px' }}>
            <div style={{ marginLeft: '50px' }}>
              <div style={{ marginLeft: '85px', fontSize: '10px' }}>Health</div>
              <HealthBar />
            </div>
            <div style={{ marginTop: '3px', marginLeft: '50px' }}>
              <div style={{ marginLeft: '85px', fontSize: '10px' }}>Level: {level}</div>
              <ExpBar />
            </div>
            <div style={{ marginTop: '10px' }}>
              <TrainingBar />
            </div>
            <div className="row" style={{ marginTop: '10px' }}>
              <div className="col-7 d-flex justify-content-end p-0 align-items-center">
                <h6 className="m-0" style={{ paddingRight: '5px', color: '#787777' }}>Next reward:</h6>
              </div>
              <div className="col-5 " style={{ padding: '0px' }}>
                {checkTrainingReward()}
              </div>
            </div>
          </div>
        </div>

        <div className="col" style={{ marginTop: '60px', width: '100%', color: '#787777' }}>
          <h4>{`wpm: ${prevWpm || 0}`}</h4>
          <h4>{`acc: ${prevAcc * 100 || 0}%`}</h4>
          <h4>{`time: ${prevTime ? moment(prevTime).format('ss:SS') : '00:00'}s`}</h4>
          <h4>{`chars: ${prevChars || 0}`}</h4>
          <h4>{`errors: ${prevErrors?.join(',') || 0}`}</h4>
        </div>
      </div>

      <div className="row text-center mx-auto" style={{ width: '850px', marginTop: '20px' }}>
        <PhraseModule />
      </div>

    </>
  )
}
