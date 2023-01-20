import { useEffect } from 'react'
import { useGenPhrase } from '@/contexts/genPhrase'
import PhraseModule from '@/components/phrase'
import { useCheckTyped } from '@/contexts/checkTyped'
import Timer from '@/hooks/timer'
import useTrials from '@/hooks/trials'
import { useSession } from 'next-auth/react'
import SmallAvatar from '@/components/smallAvatar'
import EnemyHealthBar from '@/components/enemyHealthBar'
import HealthBar from '@/components/healthBar'
import moment from 'moment'
import { useUser } from '@/contexts/user'
import useExp from '@/hooks/exp'
import useColor25 from '@/hooks/color25'

let enemyId = 'trials25battle'

export default function Trials25() {
  const { data: session } = useSession()

  const {
    newColor25
  } = useColor25()

  const {
    passage: { phrase, joinedPhrase },
    genPhraseLength: { phraseLength, phraseNumber, phrasePunctuation },
    setWordCount,
    setPhraseNumber,
    setPhrasePunctuation
  } = useGenPhrase()

  const {
    exp: {
      exp
    },
    color25: {
      color25
    }
    // nextRewards10: {
    //   nextTrials10Reward
    // },
    // nextRewards25: {
    //   nextTrials25Reward
    // },
    // nextRewards50: {
    //   nextTrials50Reward
    // }
  } = useUser()

  const {
    newExp
  } = useExp()

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
      // prevPhrase,
      // haveNum,
      // havePunc,
      prevWpm,
      prevTime,
      // prevErrors,
      prevChars,
      prevAcc
      // prevTimestamps
    },
    checkTyped: {
      wordStatus,
      charStatus }
  } = useCheckTyped()

  const {
    logTrials
  } = useTrials()

  const {
    resetPhrase
  } = Timer()

  useEffect(() => {
    resetPhrase()
    if (session) {
      // console.log(session.user)
      if (completedPhrase === true) {
        // console.log('phrase:', joinedPhrase, 'phraseNumber:', phraseNumber, 'phrasePunctuation:', phrasePunctuation, 'wpm:', wpm, 'time:', completeTime, 'errors:', errors, 'total char count', totalChars, 'acc:', acc)
        const trails25Log = {
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
        // console.log('trial 10 logged')
        logTrials(trails25Log)

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

        // log new colors

        if (wpm >= 40 && wpm <= 60) {
          if (color25 < 16) {
            // console.log('reward 16')
            const hex = {
              userId: session.user.id,
              color: 16
            }
            newColor25(hex)
          }
        }
        if (wpm >= 60 && wpm <= 80) {
          if (color25 < 17) {
            // console.log('reward 17')
            const hex = {
              userId: session.user.id,
              color: 17
            }
            newColor25(hex)
          }
        }
        if (wpm >= 80 && wpm <= 100) {
          if (color25 < 18) {
            // console.log('reward 18')
            const hex = {
              userId: session.user.id,
              color: 18
            }
            newColor25(hex)
          }
        }
        if (wpm >= 100 && wpm <= 120) {
          if (color25 < 19) {
            // console.log('reward 19')
            const hex = {
              userId: session.user.id,
              color: 19
            }
            newColor25(hex)
          }
        }
        if (wpm >= 120) {
          if (color25 < 20) {
            // console.log('reward 20')
            const hex = {
              userId: session.user.id,
              color: 20
            }
            newColor25(hex)
          }
        }
      }
    }
  }, [running])

  useEffect(() => {
    // console.log('color25:', color25)
  }, [color25])

  useEffect(() => {
    setWordCount(25)
  }, [])

  useEffect(() => {
    if (charStatus.length > 0) {
      if (wordStatus.length > 0) {
        const activeWordStat = (stat) => stat === 'activeWord'
        const activeCharStat = (stat) => stat === 'activeChar'
        const activeWordIndex = wordStatus.findIndex((activeWordStat))
        const activeCharIndex = charStatus[activeWordIndex][0].findIndex((activeCharStat))
        const activeWordLastChar = charStatus[activeWordIndex][0].length

        if (charStatus[activeWordIndex][0][activeCharIndex - 1] === 'correctChar' || charStatus[activeWordIndex][0][activeWordLastChar - 1] === 'correctChar') {
          enemyId = 'trials25hurt'
        } else {
          enemyId = 'trials25battle'
        }
      }
    }
  }, [charStatus, wordStatus, phrase])

  const checkReward = () => {
    if (color25 < 16) {
      return <div className=" p-0 m-1" style={{ height: '20px', width: '20px', backgroundColor: '#da0063', borderRadius: '10px' }} />
    }
    if (color25 === 16) {
      return <div className=" p-0 m-1" style={{ height: '20px', width: '20px', backgroundColor: '#652cb3', borderRadius: '10px' }} />
    }
    if (color25 === 17) {
      return <div className=" p-0 m-1" style={{ height: '20px', width: '20px', backgroundColor: '#8fd14f', borderRadius: '10px' }} />
    }
    if (color25 === 18) {
      return <div className=" p-0 m-1" style={{ height: '20px', width: '20px', backgroundColor: '#1084fa', borderRadius: '10px' }} />
    }
    if (color25 === 19) {
      return <div className=" p-0 m-1" style={{ height: '20px', width: '20px', backgroundColor: '#ff4a4a', borderRadius: '10px' }} />
    }
    if (color25 === 20) {
      return null
    }
    return null
  }

  const checkRewardWpm = () => {
    if (color25 < 16) {
      return 'next reward reward unlock 40WPM'
    }
    if (color25 === 16) {
      return 'next reward reward unlock 60WPM'
    }
    if (color25 === 17) {
      return 'next reward reward unlock 80WPM'
    }
    if (color25 === 18) {
      return 'next reward reward unlock 100WPM'
    }
    if (color25 === 19) {
      return 'next reward reward unlock 120WPM'
    }
    if (color25 === 20) {
      return null
    }
    return null
  }

  const checkNumPunc = (data) => {
    if (phraseNumber === true && data === 'num') {
      return '#ffcf1a'
    }
    if (phrasePunctuation === true && data === 'punc') {
      return '#ffcf1a'
    }
    return '#ffe994'
  }

  return (
    <>
      <div className="row mx-auto" style={{ borderRadius: '20px', height: '370px', width: '80%', minWidth: '1000px', background: '#ffdf65', marginTop: '50px', marginLeft: '200px', marginRight: '200px', color: 'white' }}>
        <div className="row text-center" style={{ width: '100%', marginTop: '20px', height: '50px' }}>
          <h1>Trials: 25 words</h1>
        </div>
        <div className="row mx-auto" style={{ width: '100%', marginBottom: '0px' }}>
          <div className="col" style={{ marginTop: '50px' }}>
            <div className="" style={{ marginLeft: '50px' }}>
              <div className="row ">
                <button id="trialsButton" type="button" style={{ height: '30px', width: '150px', border: 'none', borderRadius: '5px', background: checkNumPunc('num'), color: 'white' }} onClick={() => setPhraseNumber(phraseNumber)}>number</button>
              </div>
              <div className="row">
                <button id="trialsButton" type="button" style={{ height: '30px', width: '150px', marginTop: '10px', border: 'none', borderRadius: '5px', background: checkNumPunc('punc'), color: 'white' }} onClick={() => setPhrasePunctuation(phrasePunctuation)}>Punctuation</button>
              </div>
            </div>
          </div>
          <div className="col d-flex justify-content-center" style={{}}>
            <div>
              <div style={{ marginLeft: '7px' }}>
                <SmallAvatar />
              </div>
              <div style={{ marginTop: '10px' }}>
                <HealthBar />
              </div>
            </div>
          </div>
          <div className="col text-center" style={{ marginTop: '50px' }}>
            <h1>VS</h1>
          </div>
          <div className="col d-flex justify-content-center" style={{ marginLeft: '20px' }}>
            <div>
              <div id={enemyId} className="" style={{ marginLeft: '-25px', width: '225px', height: '150px' }} />
              <div style={{ marginTop: '10px' }}>
                <EnemyHealthBar />
              </div>
            </div>
          </div>
          <div className="col" style={{ marginLeft: '30px', width: '100%' }}>
            <div style={{ width: '130px', marginTop: '25px' }}>
              <h5>{`wpm: ${prevWpm || 0}`}</h5>
              <h5>{`acc: ${prevAcc * 100 || 0}%`}</h5>
              <h5>{`time: ${prevTime ? moment(prevTime).format('ss:SS') : '00:00'}s`}</h5>
              <h5>{`chars: ${prevChars || 0}`}</h5>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-center" style={{ marginBottom: '0px' }}>
          {checkReward()}
          {checkRewardWpm()}
        </div>

      </div>
      <div className="row" style={{ marginTop: '30px', marginLeft: '180px', marginRight: '180px' }}>
        <PhraseModule />

        <h7 className="d-flex justify-content-center" style={{ color: '#787777', fontSize: '9px', marginTop: '20px' }}>press "Tab" to quick reset phrase</h7>
      </div>
    </>
  )
}
