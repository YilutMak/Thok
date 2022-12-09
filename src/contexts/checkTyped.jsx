import React, { useState, createContext, useContext } from 'react'
import produce from 'immer'

const checkTypedContext = createContext()

const initialCheckType = {
  wordStatus: [],
  charStatus: []
}

export function CheckTypedProvider({ children }) {
  const [checkTypeState, setCheckTypeState] = useState(initialCheckType)

  const initializeCheckType = (passage) => {
    const wordInitializeStatus = () => {
      const passageLength = passage.length - 1
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
      const inactiveChar = passage.map((word) => word.map((character) => character.map(() => 'inactiveChar')))
      inactiveChar[0][0].pop()
      inactiveChar[0][0].unshift('activeChar')
      return inactiveChar
    }

    setCheckTypeState({
      wordStatus: wordInitializeStatus(),
      charStatus: charInitializeStatus()
    })
  }

  const updateWordStatus = () => {}

  const updateCharStatus = (activeWordIndex, activeCharIndex, wordStat, charStat) => {
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

  const contextData = {
    checkTyped: checkTypeState,
    initializeCheckType,
    updateWordStatus,
    updateCharStatus
  }

  return <checkTypedContext.Provider value={contextData}>{children}</checkTypedContext.Provider>
}

export function useCheckTyped() {
  return useContext(checkTypedContext)
}
