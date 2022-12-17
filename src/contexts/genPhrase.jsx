import createPhrase from '@/hooks/createPhrase'
import React, { useState, createContext, useContext } from 'react'
import produce from 'immer'

const genPhraseContext = createContext()

const initialPhrase = {
  phrase: [],
  joinedPhrase: []
}

const initialGenPhrase = {
  phraseLength: 10,
  phraseNumber: false,
  phrasePunctuation: false
}

export function GenPhraseProvider({ children }) {
  const [phraseState, setPhraseState] = useState(initialPhrase)
  const [genPhraseState, setGenPhraseState] = useState(initialGenPhrase)

  const newPhrase = async (length, number, punc) => {
    // console.log('genPhraseState:', genPhraseState)
    const RandomPhraseGen = createPhrase(length || genPhraseState.phraseLength, number, punc)
    const RandomPhraseLength = RandomPhraseGen.length - 1
    const joinedWords = []
    for (let index = 0; index < RandomPhraseLength; index += 1) {
      joinedWords.push(RandomPhraseGen[index][0].join(''))
    }
    const completePhrase = joinedWords.join(' ')
    // console.log(completePhrase)

    setPhraseState(produce(genPhraseState, (draft) => {
      draft.phrase = RandomPhraseGen
      draft.joinedPhrase = [completePhrase]
    }))
    // console.log('phrase:', phraseState)
  }

  const setWordCount = (count) => {
    setGenPhraseState(produce(genPhraseState, (draft) => {
      draft.phraseLength = count
    }))
    newPhrase(count, genPhraseState.phraseNumber, genPhraseState.phrasePunctuation)
  }

  const setPhraseNumber = async (boolean) => {
    setGenPhraseState(produce(genPhraseState, (draft) => {
      draft.phraseNumber = !boolean
    }))
    console.log('number:', !boolean)

    newPhrase(false, !boolean, genPhraseState.phrasePunctuation)
  }

  const setPhrasePunctuation = (boolean) => {
    setGenPhraseState(produce(genPhraseState, (draft) => {
      draft.phrasePunctuation = !boolean
    }))
    console.log('punctuation:', !boolean)

    newPhrase(false, genPhraseState.phraseNumber, !boolean)
  }

  const contextData = {
    passage: phraseState,
    genPhraseLength: genPhraseState,
    setWordCount,
    setPhraseNumber,
    setPhrasePunctuation,
    newPhrase
  }

  return <genPhraseContext.Provider value={contextData}>{children}</genPhraseContext.Provider>
}

export function useGenPhrase() {
  return useContext(genPhraseContext)
}
