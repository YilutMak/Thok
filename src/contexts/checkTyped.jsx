import React, { useState, createContext, useContext } from 'react'
import produce from 'immer'
import { useGenPhrase } from '@/contexts/genPhrase'

const checkTypedContext = createContext()

const initialCheckType = {
  wordStatus: [],
  charStatus: []
}

const intialTimer = {
  running: false,
  completedPhrase: false,
  wordTimestamps: []
}

const initialError = {
  errors: []
}

const initialAccuracy = {
  acc: 1,
  totalChars: 0
}

const initialWpm = {
  completeTime: 0,
  wpm: 0
}

export function CheckTypedProvider({ children }) {
  const [checkTypeState, setCheckTypeState] = useState(initialCheckType)
  const [timerState, setTimerState] = useState(intialTimer)
  const [errorState, setErrorState] = useState(initialError)
  const [accuracyState, setAccuracyState] = useState(initialAccuracy)
  const [wpmState, setWpmState] = useState(initialWpm)

  const {
    passage: { phrase }
  } = useGenPhrase()

  const timerRun = () => {
    setTimerState(produce(timerState, (draft) => {
      draft.running = true
      draft.completedPhrase = false
      draft.wordTimestamps.push(Date.now())
    }))
  }

  const timerStop = () => {
    setTimerState(produce(timerState, (draft) => {
      draft.running = false
      draft.completedPhrase = true
    }))
  }

  const initializeCheckType = () => {
    setTimerState(produce(timerState, (draft) => {
      draft.running = false
      draft.wordTimestamps = []
    }))

    setErrorState(produce(errorState, (draft) => {
      draft.errors = []
    }))

    const wordInitializeStatus = () => {
      const passageLength = phrase.length - 1
      const inactiveStatus = []
      for (let index = 0; index < passageLength; index += 1) {
        inactiveStatus.push('inactiveWord')
      }
      inactiveStatus.unshift('activeWord')
      return inactiveStatus
    }

    const charInitializeStatus = () => {
      // console.log('passage:', passage)
      // const inactiveChar = []
      const inactiveChar = phrase.map((word) => word.map((character) => character.map(() => 'inactiveChar')))
      inactiveChar[0][0].pop()
      inactiveChar[0][0].unshift('activeChar')
      return inactiveChar
    }

    setCheckTypeState({
      wordStatus: wordInitializeStatus(),
      charStatus: charInitializeStatus()
    })
  }

  const updateCharBack = (activeWordIndex, activeCharIndex) => {
    setCheckTypeState(produce(checkTypeState, (draft) => {
      const prevActiveCharIndex = activeCharIndex - 1
      draft.charStatus[activeWordIndex][0].splice(activeCharIndex, 1, 'inactiveChar')
      draft.charStatus[activeWordIndex][0].splice(prevActiveCharIndex, 1, 'activeChar')
    }))
  }

  const updateLastCharBack = (activeWordIndex, activeCharIndex, activeWordLength) => {
    setCheckTypeState(produce(checkTypeState, (draft) => {
      draft.charStatus[activeWordIndex][0].splice(activeWordLength - 1, 1, 'activeChar')
    }))
  }

  const updateCharCorrect = (activeWordIndex, activeCharIndex) => {
    // console.log(wordStat)
    // console.log(charStat)
    // console.log(checkTypeState.charStatus[activeWordIndex][0][activeCharIndex])
    // console.log(previousActiveChar)
    // console.log('charStat:', charStat)
    setCheckTypeState(produce(checkTypeState, (draft) => {
      const nextActiveCharIndex = activeCharIndex + 1
      draft.charStatus[activeWordIndex][0].splice(activeCharIndex, 1, 'correctChar')
      draft.charStatus[activeWordIndex][0].splice(nextActiveCharIndex, 1, 'activeChar')
    }))
  }

  const updateLastCharCorrect = (activeWordIndex, activeCharIndex) => {
    // console.log(wordStat)
    // console.log(charStat)
    // console.log(checkTypeState.charStatus[activeWordIndex][0][activeCharIndex])
    // console.log(previousActiveChar)
    // console.log('charStat:', charStat)
    setCheckTypeState(produce(checkTypeState, (draft) => {
      draft.charStatus[activeWordIndex][0].splice(activeCharIndex, 1, 'correctChar')
    }))
    setTimerState(produce(timerState, (draft) => {
      draft.wordTimestamps.push(Date.now())
    }))
  }

  const updateCharWrong = (activeWordIndex, activeCharIndex) => {
    setCheckTypeState(produce(checkTypeState, (draft) => {
      const nextActiveCharIndex = activeCharIndex + 1
      draft.charStatus[activeWordIndex][0].splice(activeCharIndex, 1, 'incorrectChar')
      draft.charStatus[activeWordIndex][0].splice(nextActiveCharIndex, 1, 'activeChar')
    }))
  }

  const updateLastCharWrong = (activeWordIndex, activeCharIndex) => {
    setCheckTypeState(produce(checkTypeState, (draft) => {
      draft.charStatus[activeWordIndex][0].splice(activeCharIndex, 1, 'incorrectChar')
    }))
  }

  const updateWordStatus = (activeWordIndex, wordStatus, charStatus) => {
    // console.log(activeWordIndex, wordStatus, charStatus)
    // console.log(charStatus[activeWordIndex + 1][0][0])
    setCheckTypeState(produce(checkTypeState, (draft) => {
      const nextActiveWordIndex = activeWordIndex + 1
      draft.wordStatus.splice(activeWordIndex, 1, 'correctWord')
      draft.wordStatus.splice(nextActiveWordIndex, 1, 'activeWord')
      draft.charStatus[activeWordIndex + 1][0][0] = 'activeChar'
    }))
  }

  const updateError = (letter) => {
    setErrorState(produce(errorState, (draft) => {
      draft.errors.push(letter)
    }))
  }

  const updateCharCount = (number) => {
    setAccuracyState(produce(accuracyState, (draft) => {
      draft.totalChars = number
      draft.acc = 1
    }))
  }

  const updateAcc = (percent) => {
    setAccuracyState(produce(accuracyState, (draft) => {
      draft.acc = percent
    }))
  }

  const updateWpm = (typingTime, wpm) => {
    // console.log('typing time:', typingTime)
    setWpmState(produce(wpmState, (draft) => {
      draft.completeTime = typingTime
      draft.wpm = wpm
    }))
  }

  const contextData = {
    checkTyped: checkTypeState,
    timer: timerState,
    errorsWords: errorState,
    typingAccuracy: accuracyState,
    typingSpeed: wpmState,
    initializeCheckType,
    updateWordStatus,
    updateCharCorrect,
    updateLastCharCorrect,
    updateCharWrong,
    updateLastCharWrong,
    updateCharBack,
    updateLastCharBack,
    timerRun,
    timerStop,
    updateError,
    updateWpm,
    updateCharCount,
    updateAcc
  }

  return <checkTypedContext.Provider value={contextData}>{children}</checkTypedContext.Provider>
}

export function useCheckTyped() {
  return useContext(checkTypedContext)
}
