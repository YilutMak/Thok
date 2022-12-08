import createPhrase from '@/hooks/createPhrase'
import React, { useState, createContext, useContext } from 'react'
import produce from 'immer'

const genPhraseContext = createContext()

const initialPhrase = {
  wordStatus: [],
  phrase: [],
  charStatus: []
}

export function GenPhraseProvider({ children }) {
  const [phraseState, setPhraseState] = useState(initialPhrase)

  const genPhraseTen = async () => {
    const randomTen = createPhrase(10)
    setPhraseState({
      wordStatus: randomTen.map(() => ('inactive')),
      phrase: randomTen,
      charStatus: randomTen.map((word) => (word[0].map(() => 'na')))
    })
  }

  const genPhraseTwentyFive = async () => setPhraseState({
    phrase: createPhrase(25)
  })

  const genPhraseFifty = async () => setPhraseState({
    phrase: createPhrase(50)
  })

  const contextData = {
    passage: phraseState,
    genPhraseTen,
    genPhraseTwentyFive,
    genPhraseFifty
  }

  return <genPhraseContext.Provider value={contextData}>{children}</genPhraseContext.Provider>
}

export function useGenPhrase() {
  return useContext(genPhraseContext)
}
