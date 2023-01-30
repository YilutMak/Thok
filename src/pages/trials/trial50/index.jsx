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
import useColor50 from '@/hooks/color50'

let enemyId = 'trials50battle'

export default function Trials50() {
  const { data: session } = useSession()

  const {
    newColor50
  } = useColor50()

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
    color50: {
      color50
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
    checkTyped: {
      wordStatus,
      charStatus },
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
    }
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
          if (color50 < 21) {
            // console.log('reward 21')
            const hex = {
              userId: session.user.id,
              color: 21
            }
            newColor50(hex)
          }
        }
        if (wpm >= 60 && wpm <= 80) {
          if (color50 < 22) {
            // console.log('reward 22')
            const hex = {
              userId: session.user.id,
              color: 22
            }
            newColor50(hex)
          }
        }
        if (wpm >= 80 && wpm <= 100) {
          if (color50 < 23) {
            // console.log('reward 23')
            const hex = {
              userId: session.user.id,
              color: 23
            }
            newColor50(hex)
          }
        }
        if (wpm >= 100 && wpm <= 120) {
          if (color50 < 24) {
            // console.log('reward 24')
            const hex = {
              userId: session.user.id,
              color: 24
            }
            newColor50(hex)
          }
        }
        if (wpm >= 120) {
          if (color50 < 25) {
            // console.log('reward 25')
            const hex = {
              userId: session.user.id,
              color: 25
            }
            newColor50(hex)
          }
        }
      }
    }
  }, [running])

  useEffect(() => {
    if (charStatus.length > 0) {
      if (wordStatus.length > 0) {
        const activeWordStat = (stat) => stat === 'activeWord'
        const activeCharStat = (stat) => stat === 'activeChar'
        const activeWordIndex = wordStatus.findIndex((activeWordStat))
        const activeCharIndex = charStatus[activeWordIndex][0].findIndex((activeCharStat))
        const activeWordLastChar = charStatus[activeWordIndex][0].length

        if (charStatus[activeWordIndex][0][activeCharIndex - 1] === 'correctChar' || charStatus[activeWordIndex][0][activeWordLastChar - 1] === 'correctChar') {
          enemyId = 'trials50hurt'
        } else {
          enemyId = 'trials50battle'
        }
      }
    }
  }, [charStatus, wordStatus, phrase])

  useEffect(() => {
    // console.log('color50:', color50)
  }, [color50])

  useEffect(() => {
    setWordCount(50)
  }, [])

  const checkReward = () => {
    if (color50 < 21) {
      return <div className=" p-0 m-1" style={{ height: '20px', width: '20px', backgroundColor: '#8e89cc', borderRadius: '10px' }} />
    }
    if (color50 === 21) {
      return <div className=" p-0 m-1" style={{ height: '20px', width: '20px', backgroundColor: '#7ceeab', borderRadius: '10px' }} />
    }
    if (color50 === 22) {
      return <div className=" p-0 m-1" style={{ height: '20px', width: '20px', backgroundColor: '#a3a3a3ff', borderRadius: '10px' }} />
    }
    if (color50 === 23) {
      return <div className=" p-0 m-1" style={{ height: '20px', width: '20px', backgroundColor: '#edb6da', borderRadius: '10px' }} />
    }
    if (color50 === 24) {
      return <div className=" p-0 m-1" style={{ height: '20px', width: '20px', backgroundColor: '#383838', borderRadius: '10px' }} />
    }
    if (color50 === 25) {
      return null
    }
    return null
  }

  const checkRewardWpm = () => {
    if (color50 < 21) {
      return 'next reward reward unlock 40WPM'
    }
    if (color50 === 21) {
      return 'next reward reward unlock 60WPM'
    }
    if (color50 === 22) {
      return 'next reward reward unlock 80WPM'
    }
    if (color50 === 23) {
      return 'next reward reward unlock 100WPM'
    }
    if (color50 === 24) {
      return 'next reward reward unlock 120WPM'
    }
    if (color50 === 25) {
      return null
    }
    return null
  }

  const checkNumPunc = (data) => {
    if (phraseNumber === true && data === 'num') {
      return '#ff34f3'
    }
    if (phrasePunctuation === true && data === 'punc') {
      return '#ff34f3'
    }
    return '#ff91f8'
  }

  return (
    <>
      <div className="row mx-auto" style={{ borderRadius: '20px', height: '370px', width: '80%', minWidth: '1000px', background: '#ff65f6', marginTop: '50px', marginLeft: '200px', marginRight: '200px', color: 'white' }}>
        <div className="row text-center" style={{ width: '100%', marginTop: '20px', height: '50px' }}>
          <h1>Trials: 50 words</h1>
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
              <div id={enemyId} className="" style={{ marginLeft: '-10px', width: '225px', height: '150px' }} />
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

        <h6 className="d-flex justify-content-center" style={{ color: '#787777', fontSize: '9px', marginTop: '20px' }}>press Tab to quick reset phrase</h6>
      </div>
    </>
  )
}
