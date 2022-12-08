import { useEffect } from 'react'
import { useGenPhrase } from '@/contexts/genPhrase'
import { useTyping } from '@/contexts/typing'
import { useCheckTyped } from '@/contexts/checkTyped'

export default function Training() {
  const {
    passage: { phrase },
    genPhraseTen
    // genPhraseTwentyFive,
    // genPhraseFifty,
  } = useGenPhrase()

  const {
    typedPassage: { typed },
    typing
  } = useTyping()

  const {
    checkTyped: {
      wordStatus,
      charStatus },
    initializeCheckType
  } = useCheckTyped()

  const keyDownHandler = (e) => {
    e.preventDefault()
    if (e.repeat) return
    typing(e.key)
  }

  useEffect(() => {
    genPhraseTen()
  }, [])

  useEffect(() => {
    if (phrase.length > 0) {
      initializeCheckType(phrase)
    }
  }, [phrase])

  useEffect(() => {
    document.addEventListener('keydown', keyDownHandler)
  }, [])

  const letterStyle = (i, n) => {
    if (charStatus.length > 0) {
      if (charStatus[i][0][n] === 'activeChar') {
        return ({ color: 'black' })
      }
    }
    return ({ color: 'gray' })
  }

  if (!phrase) return <div>Loading...</div>

  // console.log('phrase:', phrase)
  // console.log('wordStatus:', wordStatus)
  // console.log('charStatus:', charStatus)
  // console.log('typed:', typed)

  return (
    <div className="d-flex">{
      phrase.map((word, i) => (
        <div className="d-flex" style={{ margin: '5px' }} key={`${i}.${word}`}>
          {
              word[0].map((character, n) => (
                <div className="" style={letterStyle(i, n)} key={`${n}.${character}`}>{character}</div>
              ))
            }
        </div>
      ))
    }</div>
  )
}
