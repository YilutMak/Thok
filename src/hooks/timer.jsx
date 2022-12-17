import { useEffect } from 'react'
import { useTyping } from '@/contexts/typing'
import { useCheckTyped } from '@/contexts/checkTyped'
import { useGenPhrase } from '@/contexts/genPhrase'
import moment from 'moment'

export default function Timer() {
  const {
    passage: { phrase, joinedPhrase },
    genPhraseLength: {
      phraseLength,
      phraseNumber,
      phrasePunctuation
    },
    newPhrase
  } = useGenPhrase()

  const {
    typedPassage: { typed }
  } = useTyping()

  const {
    checkTyped: {
      // wordStatus,
      charStatus
    },
    timer: {
      running,
      completedPhrase,
      wordTimestamps
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
    timerRun,
    timerStop,
    updateWpm

  } = useCheckTyped()

  const timerMount = () => {
    // console.log('charStatus:', charStatus)
    if (charStatus.length > 0) {
      const lastWord = charStatus[charStatus.length - 1][0]
      const lastChar = lastWord[lastWord.length - 1]
      // phrase length

      // console.log('charStatus:', charStatus[0][0])
      if (charStatus[0][0][0] === 'correctChar' && charStatus[0][0][1] === 'activeChar') {
        timerRun()
        // console.log('timerRun:', running)
      }

      // console.log(lastChar)
      if (lastChar === 'correctChar') {
        timerStop()
        // console.log('timerRun:', running)
      }
    }
  }

  const resetPhrase = () => {
    if (phrase.length > 0 && charStatus.length > 0) {
      // set new phrase
      const lastWordStatus = charStatus[charStatus.length - 1][0]
      const lastWordCharStatus = lastWordStatus[lastWordStatus.length - 1]
      if (lastWordCharStatus === 'correctChar') {
        newPhrase(phraseLength, phraseNumber, phrasePunctuation)
      }
    }
  }

  const timerlog = () => {
    // console.log('phraseLength:', phraseLength, 'wordTimestamps:', wordTimestamps.length)

    // ! calculate typing time
    if (wordTimestamps.length - 1 === phraseLength) {
      const typingMilliseconds = wordTimestamps[wordTimestamps.length - 1] - wordTimestamps[0]
      const typingTime = moment(typingMilliseconds).format('mm:ss.SS')
      // console.log('time:', typingTime)
      const averageWPM = Math.floor((phraseLength / (typingMilliseconds / 1000)) * 60)
      // console.log('wpm:', averageWPM)
      updateWpm(typingMilliseconds, averageWPM)
    }

    // ! logging errors
    if (errors.length > 0) {
      // console.log('errors:', errors)
    }
    if (errors.length < 1) {
      // console.log('no errors')
    }
  }

  useEffect(() => {
    // console.log('phrase:', joinedPhrase, 'phraseNumber:', phraseNumber, 'phrasePunctuation:', phrasePunctuation, 'wpm:', wpm, 'time:', completeTime, 'errors:', errors, 'total char count', totalChars, 'acc:', acc, 'completePhrase?:', completedPhrase)
  }, [running])

  useEffect(() => {
    // console.log('joinedPhrase:', joinedPhrase, 'acc:', acc, 'totalChars:', totalChars, 'errors:', errors)
  }, [charStatus])

  useEffect(() => {
    timerlog()
  }, [wordTimestamps])

  const data = {
    timerMount,
    resetPhrase
  }
  return data
}
