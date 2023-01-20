import { useGenPhrase } from '@/contexts/genPhrase'
import { useEffect } from 'react'
import { useTyping } from '@/contexts/typing'
import { useCheckTyped } from '@/contexts/checkTyped'

export default function CheckingType() {
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
      wordStatus,
      charStatus },
    errorsWords: {
      errors
    },
    typingAccuracy: {
      acc,
      totalChars
    },
    initializeCheckType,
    updateWordStatus,
    updateCharCorrect,
    updateLastCharCorrect,
    updateCharWrong,
    updateLastCharWrong,
    updateCharBack,
    updateLastCharBack,
    updateError,
    updateAcc,
    updateCharCount
  } = useCheckTyped()

  const initializeSentence = () => {
    if (phrase.length > 0) {
      initializeCheckType(phrase)
      const joinedWords = joinedPhrase.join(' ')
      const wordsArray = joinedWords.split(' ')
      const phraseCharacters = wordsArray.join('')
      const charCount = phraseCharacters.length
      updateCharCount(charCount)
    }
  }

  useEffect(() => {
    initializeSentence()
  }, [phrase])

  const checkTyped = () => {
    if (charStatus.length > 0) {
    // console.log('wordStatus:', wordStatus)
    // console.log('charStatus:', charStatus)
      const activeWordStat = (stat) => stat === 'activeWord'
      const activeCharStat = (stat) => stat === 'activeChar'
      // console.log('active word:', wordStatus.findIndex((activeWordStat)))
      const activeWordIndex = wordStatus.findIndex((activeWordStat))
      const activeCharIndex = charStatus[activeWordIndex][0].findIndex((activeCharStat))
      const activeCharFirst = charStatus[activeWordIndex][0][0]
      const activePhraseChar = phrase[activeWordIndex][0][activeCharIndex]
      const lastTypedChar = typed[0]

      // console.log(lastWord)
      // console.log(lastWordChar)
      // console.log(activeCharIndex)
      // console.log('lastTypedChar:', lastTypedChar, 'active char:', activePhraseChar)
      const correctChars = charStatus[activeWordIndex][0].filter((char) => char === 'correctChar').length
      const activeWordLength = phrase[activeWordIndex][0].length
      // console.log('correctChars:', correctChars, 'word length:', activeWordLength)

      // correct word
      if (lastTypedChar === ' ' && activeWordLength === correctChars) {
        // console.log('next word')
        // console.log('activeWordIndex:', activeWordIndex, 'phrase length:', wordStatus.length)
        if (activeWordIndex !== wordStatus.length - 1) {
          updateWordStatus(activeWordIndex, wordStatus, charStatus)
        }
      }

      // tab new phrase
      if (lastTypedChar === 'tab') {
        // console.log('phraseLength', phraseLength)
        switch (phraseLength) {
          case 10:
            // console.log('gen 10')
            newPhrase(phraseLength, phraseNumber, phrasePunctuation)
            break
          case 25:
            newPhrase(phraseLength, phraseNumber, phrasePunctuation)
            break
          case 50:
            newPhrase(phraseLength, phraseNumber, phrasePunctuation)
            break
          default:
            // console.log('error')
            break
        }
      }

      // backspace
      if (lastTypedChar === 'backspace' && activeCharFirst !== 'activeChar') {
        // console.log('backspace')
        // console.log('activeCharIndex:', activeCharIndex, 'word length:', phrase[activeWordIndex][0].length)
        if (activeCharIndex !== 0 && activeCharIndex !== -1) {
          updateCharBack(activeWordIndex, activeCharIndex)
        }
        if (activeCharIndex === -1) {
          updateLastCharBack(activeWordIndex, activeCharIndex, phrase[activeWordIndex][0].length)
        }
      }

      // incorrect
      if (lastTypedChar !== 'backspace' && lastTypedChar !== 'tab' && lastTypedChar !== activePhraseChar) {
      // console.log('activeCharIndex:', activeCharIndex, 'word length:', phrase[activeWordIndex][0].length)
        if (activeCharIndex !== -1) {
          if (activeCharIndex < phrase[activeWordIndex][0].length - 1) {
            // console.log('incorrect')
            // console.log('lastTypedChar:', lastTypedChar)
            updateCharWrong(activeWordIndex, activeCharIndex)
            updateError(lastTypedChar)
            const errorsCount = errors.length + 1
            const totalCharacter = totalChars || 0
            // console.log('totalChars:', totalChars)
            // console.log('errorsCount:', errorsCount)
            const accPercentage = 1 - (errorsCount / (totalCharacter + errorsCount + 1)).toFixed(2)
            // console.log('accPercentage:', accPercentage)
            updateAcc(accPercentage)
          }
          if (activeCharIndex === phrase[activeWordIndex][0].length - 1) {
            // console.log('incorrect')
            // console.log('lastTypedChar:', lastTypedChar)
            updateLastCharWrong(activeWordIndex, activeCharIndex)
            updateError(lastTypedChar)
            const errorsCount = errors.length + 1
            const totalCharacter = totalChars || 0
            // console.log('totalChars:', totalChars)
            // console.log('errorsCount:', errorsCount)
            const accPercentage = 1 - (errorsCount / (totalCharacter + errorsCount + 1)).toFixed(2)
            // console.log('accPercentage:', accPercentage)
            updateAcc(accPercentage)
          }
        }
      }

      // correct
      if (lastTypedChar === activePhraseChar) {
        // console.log('correct')
        // console.log('activeCharIndex:', activeCharIndex, 'word length:', phrase[activeWordIndex][0].length)
        if (activeCharIndex !== -1) {
          if (activeCharIndex < phrase[activeWordIndex][0].length - 1) {
            updateCharCorrect(activeWordIndex, activeCharIndex, wordStatus, charStatus)
          }
          if (activeCharIndex === phrase[activeWordIndex][0].length - 1) {
            updateLastCharCorrect(activeWordIndex, activeCharIndex, wordStatus, charStatus)
          }
        }
      }
    }
  }

  const letterStyle = (i, n) => {
    // console.log('i:', i)
    if (!charStatus[i]) {
      return null
    }

    if (charStatus.length > 0) {
      // console.log('letter:', charStatus, i, n)
      // console.log('charStatus length:', charStatus[i][0].length, 'char:', n)
      // console.log('wordStatus length:', wordStatus)

      // first letter in word active
      if (charStatus[i][0][n] === 'activeChar' && n === 0) {
        // console.log('first letter active')
        return 'activeFirstLetter'
      }

      // rest of the letter active
      if (charStatus[i][0][n] === 'activeChar') {
        // console.log('not first letter')
        return 'activeLetter'
      }

      if (charStatus[i][0][n] === 'inactiveChar') {
        return 'inActiveLetter'
      }

      // last letter correct
      if (charStatus[i][0][n] === 'correctChar' && charStatus[i][0].length - 1 === n && wordStatus[i] === 'activeWord') {
        // console.log('last letter correct')
        return 'correctLastLetter'
      }

      // rest of the letter correct
      if (charStatus[i][0][n] === 'correctChar') {
        return 'correctLetter'
      }

      // last letter incorrect
      if (charStatus[i][0][n] === 'incorrectChar' && charStatus[i][0].length - 1 === n && wordStatus[i] === 'activeWord') {
        // console.log('last letter correct')
        return 'incorrectLastLetter'
      }

      // rest of the letter incorrect
      if (charStatus[i][0][n] === 'incorrectChar') {
        return 'incorrectLetter'
      }
    }
    return null
  }

  const data = {
    checkTyped,
    initializeSentence,
    letterStyle
  }

  return data
}
