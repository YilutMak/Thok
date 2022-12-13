import wordList from '@/library/words.json'
import punc from '@/library/punctuation.json'

export default function createPhrase(wordLength, phraseNumber, phrasePunctuation) {
  const randomWords = []

  function getRandomInt(max) {
    return Math.floor(Math.random() * max)
  }

  // console.log('phraseNumber:', phraseNumber, 'phrasePunctuation', phrasePunctuation)
  let phraseStatus

  if (phraseNumber === false && phrasePunctuation === false) { phraseStatus = 'onlyWords' }
  if (phraseNumber === true && phrasePunctuation === false) { phraseStatus = 'numbers' }
  if (phraseNumber === false && phrasePunctuation === true) { phraseStatus = 'punctuation' }
  if (phraseNumber === true && phrasePunctuation === true) { phraseStatus = 'all' }

  // console.log('phraseStatus:', phraseStatus)

  // ! Only words
  if (phraseStatus === 'onlyWords') {
    for (let index = 0; index < wordLength; index += 1) {
      randomWords.push(wordList.words[getRandomInt(wordList.words.length)])
    }
    // console.log('randomWords:', randomWords)
  }

  // ! Only number
  if (phraseStatus === 'numbers') {
    for (let index = 0; index < wordLength; index += 1) {
      randomWords.push(wordList.words[getRandomInt(wordList.words.length)])
    }
    // console.log('randomWords:', randomWords)
    let numberAmount = getRandomInt(wordLength / 3)
    if (numberAmount === 0) { numberAmount += 1 }
    // console.log('numberAmount:', numberAmount)
    for (let index = 0; index < numberAmount; index += 1) {
      let randomPhrasePosition = getRandomInt(wordLength)
      if (randomPhrasePosition === 0) { randomPhrasePosition += 1 }
      randomWords.splice(randomPhrasePosition, 1, `${getRandomInt(100)}`)
    }
    // console.log('randomWords:', randomWords)
  }

  // ! Only punctuation
  if (phraseStatus === 'punctuation') {
    for (let index = 0; index < wordLength; index += 1) {
      randomWords.push(wordList.words[getRandomInt(wordList.words.length)])
    }

    // capitalize first word first letter
    const captialWord = randomWords[0].charAt(0).toUpperCase()
    randomWords.splice(0, 1, captialWord + randomWords[0].slice(1))
    // add sentence end punctuation
    const lastWord = randomWords[randomWords.length - 1]
    randomWords.splice(randomWords.length - 1, 1, lastWord + punc.sentenceEnd[getRandomInt(punc.sentenceEnd.length)])
    // random punctuation in sentence
    let puncAmount = getRandomInt(wordLength / 3)
    if (puncAmount === 0) { puncAmount += 1 }
    // console.log('puncAmount:', puncAmount)
    let prevRandomPosition
    for (let index = 0; index < puncAmount; index += 1) {
      const randomPunc = punc.punctuation[getRandomInt(punc.punctuation.length)]
      let randomPosition = getRandomInt(randomWords.length)
      if (randomPosition === prevRandomPosition) {
        randomPosition += 1
      }
      prevRandomPosition = randomPosition
      if (randomPosition === randomWords.length - 1) { randomPosition -= 1 }
      // console.log('randomWords:', randomWords.length)
      const captialRandomWord = randomWords[randomPosition + 1]?.charAt(0).toUpperCase() || ''
      // console.log('captialRandomWord:', captialRandomWord)
      // console.log('randomPosition:', randomPosition)
      switch (randomPunc) {
        case ',':
          // console.log(',')
          randomWords.splice(randomPosition, 1, randomWords[randomPosition] + randomPunc)
          break
        case ':':
          // console.log(':')
          randomWords.splice(randomPosition, 1, randomWords[randomPosition] + randomPunc)
          break
        case ';':
          // console.log(';')
          randomWords.splice(randomPosition, 1, randomWords[randomPosition] + randomPunc)
          break
        case '-':
          // console.log('-')
          randomWords.splice(randomPosition, 0, randomPunc)
          break
        case '()':
          // console.log('()')
          randomWords.splice(randomPosition, 1, `(${randomWords[randomPosition]})`)
          break
        case '.':
          // console.log('.')
          randomWords.splice(randomPosition, 1, randomWords[randomPosition] + randomPunc)
          randomWords.splice(randomPosition + 1, 1, captialRandomWord + randomWords[randomPosition + 1].slice(1))
          break
        case '?':
          // console.log('?')
          randomWords.splice(randomPosition, 1, randomWords[randomPosition] + randomPunc)
          randomWords.splice(randomPosition + 1, 1, captialRandomWord + randomWords[randomPosition + 1].slice(1))
          break
        case '!':
          // console.log('!')
          randomWords.splice(randomPosition, 1, randomWords[randomPosition] + randomPunc)
          randomWords.splice(randomPosition + 1, 1, captialRandomWord + randomWords[randomPosition + 1].slice(1))
          break
        default:
          // console.log('error')
          break
      }
    }
    // console.log('randomWords:', randomWords)
  }

  // ! both numbers and punctuation
  if (phraseStatus === 'all') {
    console.log('wordLength:', wordLength)

    for (let index = 0; index < wordLength; index += 1) {
      randomWords.push(wordList.words[getRandomInt(wordList.words.length)])
    }

    // console.log('randomWords:', randomWords)
    let numberAmount = getRandomInt(wordLength / 3)
    if (numberAmount === 0) { numberAmount += 1 }
    // console.log('numberAmount:', numberAmount)
    for (let index = 0; index < numberAmount; index += 1) {
      let randomPhrasePosition = getRandomInt(wordLength)
      if (randomPhrasePosition === 0) { randomPhrasePosition += 1 }
      randomWords.splice(randomPhrasePosition, 1, `${getRandomInt(100)}`)
    }

    // capitalize first word first letter
    const captialWord = randomWords[0].charAt(0).toUpperCase()
    randomWords.splice(0, 1, captialWord + randomWords[0].slice(1))
    // add sentence end punctuation
    const lastWord = randomWords[randomWords.length - 1]
    randomWords.splice(randomWords.length - 1, 1, lastWord + punc.sentenceEnd[getRandomInt(punc.sentenceEnd.length)])
    // random punctuation in sentence
    let puncAmount = getRandomInt(wordLength / 3)
    if (puncAmount === 0) { puncAmount += 1 }
    // console.log('puncAmount:', puncAmount)
    let prevRandomPosition
    for (let index = 0; index < puncAmount; index += 1) {
      const randomPunc = punc.punctuation[getRandomInt(punc.punctuation.length)]
      let randomPosition = getRandomInt(randomWords.length)
      if (randomPosition === prevRandomPosition) {
        randomPosition += 1
      }
      prevRandomPosition = randomPosition
      if (randomPosition === randomWords.length - 1) { randomPosition -= 1 }
      const captialRandomWord = randomWords[randomPosition + 1]?.charAt(0).toUpperCase() || ''
      // console.log('captialRandomWord:', captialRandomWord)
      // console.log('randomPosition:', randomPosition)
      // console.log('captialRandomWord:', captialRandomWord)
      switch (randomPunc) {
        case ',':
          // console.log(',')
          randomWords.splice(randomPosition, 1, randomWords[randomPosition] + randomPunc)
          break
        case ':':
          // console.log(':')
          randomWords.splice(randomPosition, 1, randomWords[randomPosition] + randomPunc)
          break
        case ';':
          // console.log(';')
          randomWords.splice(randomPosition, 1, randomWords[randomPosition] + randomPunc)
          break
        case '-':
          // console.log('-')
          randomWords.splice(randomPosition, 0, randomPunc)
          break
        case '()':
          // console.log('()')
          randomWords.splice(randomPosition, 1, `(${randomWords[randomPosition]})`)
          break
        case '.':
          // console.log('.')
          randomWords.splice(randomPosition, 1, randomWords[randomPosition] + randomPunc)
          randomWords.splice(randomPosition + 1, 1, captialRandomWord + randomWords[randomPosition + 1].slice(1))
          break
        case '?':
          // console.log('?')
          randomWords.splice(randomPosition, 1, randomWords[randomPosition] + randomPunc)
          randomWords.splice(randomPosition + 1, 1, captialRandomWord + randomWords[randomPosition + 1].slice(1))
          break
        case '!':
          // console.log('!')
          randomWords.splice(randomPosition, 1, randomWords[randomPosition] + randomPunc)
          randomWords.splice(randomPosition + 1, 1, captialRandomWord + randomWords[randomPosition + 1].slice(1))
          break
        default:
          // console.log('error')
          break
      }
    }
  }

  const randomSplitWords = randomWords.map((word) => [
    word.split('')
  ])
  // console.log('random gen:', randomSplitWords)

  return randomSplitWords
}
