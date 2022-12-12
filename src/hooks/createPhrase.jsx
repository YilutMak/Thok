import wordList from '@/library/words.json'

export default function createPhrase(wordLength) {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max)
  }

  // console.log(wordLength)

  const randomWords = []

  for (let index = 0; index < wordLength; index += 1) {
    randomWords.push(wordList.words[getRandomInt(wordList.words.length)])
  }

  const randomSplitWords = randomWords.map((word) => [
    word.split('')
    // [word.split('').map(() => ('neutral'))],
    // ['nonActive']
  ])

  // console.log('random gen:', randomSplitWords)

  return randomSplitWords
}
