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
    initializeCheckType,
    updateWordStatus,
    updateCharStatus

  } = useCheckTyped()

  useEffect(() => {
    genPhraseTen()
  }, [])

  const checkTyped = () => {
    if (charStatus.length > 0) {
      // console.log('wordStatus:', wordStatus)
      // console.log('charStatus:', charStatus)
      const activeWordStat = (stat) => stat === 'activeWord'
      const activeCharStat = (stat) => stat === 'activeChar'
      // console.log('active word:', wordStatus.findIndex((activeWordStat)))
      const activeWordIndex = wordStatus.findIndex((activeWordStat))
      const activeCharIndex = charStatus[activeWordIndex][0].findIndex((activeCharStat))
      console.log(activeCharIndex)
      const activePhraseChar = phrase[activeWordIndex][0][activeCharIndex]
      const lastTypedChar = typed[typed.length - 1]
      // console.log('typed:', lastTypedChar, 'active char:', activePhraseChar)
      if (lastTypedChar === activePhraseChar) {
        console.log('correct')
        updateCharStatus(activeWordIndex, activeCharIndex, wordStatus, charStatus)
      }
    }
  }

  const keyDownHandler = (e) => {
    e.preventDefault()
    if (e.repeat) return
    typing(e.key)
  }

  useEffect(() => {
    if (phrase.length > 0) {
      initializeCheckType(phrase)
    }
  }, [phrase])

  useEffect(() => {
    document.addEventListener('keydown', keyDownHandler)
  }, [])

  checkTyped()

  const letterStyle = (i, n) => {
    if (charStatus.length > 0) {
      // console.log('letter:', charStatus, i, n)
      if (charStatus[i][0][n] === 'activeChar') {
        return 'activeLetter'
      }
      if (charStatus[i][0][n] === 'inactiveChar') {
        return 'inActiveLetter'
      }
      if (charStatus[i][0][n] === 'correctChar') {
        return 'correctLetter'
      }
      if (charStatus[i][0][n] === 'incorrectChar') {
        return 'incorrectLetter'
      }
    }
    return null
  }

  if (!phrase) return <div>Loading...</div>

  if (charStatus.length > 0) {
    console.log('charStatus:', charStatus[0][0])
  }
  // console.log('phrase:', phrase)
  // console.log('wordStatus:', wordStatus)

  console.log('typed:', typed)

  return (
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
  )
}
