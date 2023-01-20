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
import useColor10 from '@/hooks/color10'

let enemyId = 'trials10battle'

export default function Trials10() {
  const { data: session } = useSession()

  const {
    newColor10
  } = useColor10()

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
    color10: {
      color10
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
        const trails10Log = {
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
        logTrials(trails10Log)

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
          if (color10 < 11) {
            // console.log('reward 11')
            const hex = {
              userId: session.user.id,
              color: 11
            }
            newColor10(hex)
          }
        }
        if (wpm >= 60 && wpm <= 80) {
          if (color10 < 12) {
            const hex = {
              userId: session.user.id,
              color: 12
            }
            newColor10(hex)
          }
          // console.log('reward 12')
        }
        if (wpm >= 80 && wpm <= 100) {
          if (color10 < 13) {
            // console.log('reward 13')
            const hex = {
              userId: session.user.id,
              color: 13
            }
            newColor10(hex)
          }
        }
        if (wpm >= 100 && wpm <= 120) {
          if (color10 < 14) {
            // console.log('reward 14')
            const hex = {
              userId: session.user.id,
              color: 14
            }
            newColor10(hex)
          }
        }
        if (wpm >= 120) {
          if (color10 < 15) {
            // console.log('reward 15')
            const hex = {
              userId: session.user.id,
              color: 15
            }
            newColor10(hex)
          }
        }
      }
    }
  }, [running])

  useEffect(() => {
    // console.log('color10:', color10)
  }, [color10])

  useEffect(() => {
    setWordCount(10)
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
          enemyId = 'trials10hurt'
        } else {
          enemyId = 'trials10battle'
        }
      }
    }
  }, [charStatus, wordStatus, phrase])

  const checkReward = () => {
    if (color10 < 11) {
      return <div className=" p-0 m-1" style={{ height: '20px', width: '20px', backgroundColor: '#fef445', borderRadius: '10px' }} />
    }
    if (color10 === 11) {
      return <div className=" p-0 m-1" style={{ height: '20px', width: '20px', backgroundColor: '#f24726', borderRadius: '10px' }} />
    }
    if (color10 === 12) {
      return <div className=" p-0 m-1" style={{ height: '20px', width: '20px', backgroundColor: '#12cdd4', borderRadius: '10px' }} />
    }
    if (color10 === 13) {
      return <div className=" p-0 m-1" style={{ height: '20px', width: '20px', backgroundColor: '#fac710', borderRadius: '10px' }} />
    }
    if (color10 === 14) {
      return <div className=" p-0 m-1" style={{ height: '20px', width: '20px', backgroundColor: '#cee741', borderRadius: '10px' }} />
    }
    if (color10 === 15) {
      return null
    }
    return null
  }

  const checkRewardWpm = () => {
    if (color10 < 11) {
      return 'next reward reward unlock 40WPM'
    }
    if (color10 === 11) {
      return 'next reward reward unlock 60WPM'
    }
    if (color10 === 12) {
      return 'next reward reward unlock 80WPM'
    }
    if (color10 === 13) {
      return 'next reward reward unlock 100WPM'
    }
    if (color10 === 14) {
      return 'next reward reward unlock 120WPM'
    }
    if (color10 === 15) {
      return null
    }
    return null
  }

  const checkNumPunc = (data) => {
    if (phraseNumber === true && data === 'num') {
      return '#ff5440'
    }
    if (phrasePunctuation === true && data === 'punc') {
      return '#ff5440'
    }
    return '#ff9083'
  }

  return (
    <>
      <div className="row mx-auto" style={{ borderRadius: '20px', height: '370px', width: '80%', minWidth: '1000px', background: '#ff7365', marginTop: '50px', marginLeft: '200px', marginRight: '200px', color: 'white' }}>
        <div className="row text-center" style={{ width: '100%', marginTop: '20px', height: '50px' }}>
          <h1>Trials: 10 words</h1>
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
              <div id={enemyId} className="" style={{ marginLeft: '-15px', width: '225px', height: '150px' }} />
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
      <div className="row" style={{ marginTop: '30px' }}>
        <PhraseModule />
        <h7 className="d-flex justify-content-center" style={{ color: '#787777', fontSize: '9px', marginTop: '20px' }}>press Tab to quick reset phrase</h7>
      </div>

    </>
  )
}
