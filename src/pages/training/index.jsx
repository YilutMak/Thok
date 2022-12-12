import { useEffect } from 'react'
import { useGenPhrase } from '@/contexts/genPhrase'
import { useTyping } from '@/contexts/typing'
import { useCheckTyped } from '@/contexts/checkTyped'
import CheckingType from '@/hooks/checkTypedStatus'

export default function Training() {
  const {
    checkTyped,
    initializeSentence,
    letterStyle
  } = CheckingType()

  const {
    passage: { phrase },
    genPhraseLength: { phraseLength },
    genPhrase,
    setWordCount
  } = useGenPhrase()

  const {
    typedPassage: { typed },
    typing
  } = useTyping()

  const {
    checkTyped: {
      wordStatus,
      charStatus }
  } = useCheckTyped()

  useEffect(() => {
    genPhrase()
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

  if (!phrase) return <div>Loading...</div>

  if (charStatus.length > 0) {
    // console.log('charStatus:', charStatus)
  }
  // console.log('phrase:', phrase)
  // console.log('wordStatus:', wordStatus)
  // console.log('typed:', typed)

  return (
    <>
      <button type="button" onClick={() => setWordCount(10)}>10 word</button>
      <button type="button" onClick={() => setWordCount(25)}>25 word</button>
      <button type="button" onClick={() => setWordCount(50)}>50 word</button>
      <div className="d-flex">{
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

    </>
  )
}
