import createPhrase from '@/hooks/createPhrase'
import React, { useState, createContext, useContext } from 'react'
import produce from 'immer'

const genPhraseContext = createContext()

const initialPhrase = {
  phrase: []
}

const initialGenPhrase = {
  phraseLength: 10
}

export function GenPhraseProvider({ children }) {
  const [phraseState, setPhraseState] = useState(initialPhrase)
  const [genPhraseState, setGenPhraseState] = useState(initialGenPhrase)

  const genPhrase = async () => {
    setPhraseState({
      phrase: createPhrase(genPhraseState.phraseLength)
    })
    console.log('phrase:', phraseState)
  }

  const setWordCount = (count) => {
    setGenPhraseState({
      phraseLength: count
    })
    setPhraseState({
      phrase: createPhrase(count)
    })
  }

  const contextData = {
    passage: phraseState,
    genPhraseLength: genPhraseState,
    genPhrase,
    setWordCount
  }

  return <genPhraseContext.Provider value={contextData}>{children}</genPhraseContext.Provider>
}

export function useGenPhrase() {
  return useContext(genPhraseContext)
}
