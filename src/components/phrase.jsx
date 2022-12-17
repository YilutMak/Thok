import { useEffect } from 'react'
import { useGenPhrase } from '@/contexts/genPhrase'
import { useTyping } from '@/contexts/typing'
import { useCheckTyped } from '@/contexts/checkTyped'
import CheckingType from '@/hooks/checkTypedStatus'
import Timer from '@/hooks/timer'

export default function Phrase() {
  const {
    checkTyped,
    letterStyle
  } = CheckingType()

  const {
    timerMount
  } = Timer()

  const {
    passage: { phrase },
    // genPhraseLength: { phraseLength, phraseNumber, phrasePunctuation },
    newPhrase
  } = useGenPhrase()

  const {
    typedPassage: { typed },
    typing
  } = useTyping()

  const {
    checkTyped: {
      // wordStatus,
      charStatus }
  } = useCheckTyped()

  useEffect(() => {
    newPhrase(10, false, false)
  }, [])

  const keyDownHandler = (e) => {
    e.preventDefault()
    if (e.repeat) return
    typing(e.key)
  }

  useEffect(() => {
    document.addEventListener('keydown', keyDownHandler)
  }, [])

  useEffect(() => {
    checkTyped()
  }, [typed])

  useEffect(() => {
    timerMount()
  }, [charStatus])

  if (!phrase) return <div>Loading...</div>

  if (charStatus.length > 0) {
    // console.log('charStatus:', charStatus)
  }
  // console.log('phrase:', phrase)
  // console.log('wordStatus:', wordStatus)
  // console.log('typed:', typed)
  // console.log('phraseNumber:', phraseNumber)
  // console.log('phrasePunctuation:', phrasePunctuation)

  return (
    <div style={{ margin: '100px', height: '300px' }}>
      <div className="d-flex flex-wrap justify-content-center">{
        phrase.map((word, i) => (
          <div className="d-flex" style={{ margin: '5px' }} key={`${i}.${word}`}>
            {
                word[0].map((character, n) => (
                  <div id={letterStyle(i, n)} className="" style={{ color: 'gray' }} key={`${n}.${character}`}>{character}</div>
                ))
              }
          </div>
        ))
        }</div>
    </div>
  )
}
