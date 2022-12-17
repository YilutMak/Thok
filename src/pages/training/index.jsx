import { useEffect } from 'react'
import { useGenPhrase } from '@/contexts/genPhrase'
import PhraseModule from '@/components/phrase'
import { useCheckTyped } from '@/contexts/checkTyped'
import Timer from '@/hooks/timer'
import useTraining from '@/hooks/training'
import { useSession } from 'next-auth/react'

export default function Training() {
  const { data: session } = useSession()

  const {
    passage: { joinedPhrase },
    genPhraseLength: { phraseLength, phraseNumber, phrasePunctuation },
    setWordCount,
    setPhraseNumber,
    setPhrasePunctuation
  } = useGenPhrase()

  const {
    timer: {
      running,
      completedPhrase
    },
    errorsWords: {
      errors
    },
    typingAccuracy: {
      acc,
      totalChars
    },
    typingSpeed: {
      completeTime,
      wpm
    }
  } = useCheckTyped()

  const {
    logTraining
  } = useTraining()

  const {
    resetPhrase
  } = Timer()

  useEffect(() => {
    resetPhrase()
    if (session) {
      console.log(session.user)
      if (completedPhrase === true) {
        // console.log('phrase:', joinedPhrase, 'phraseNumber:', phraseNumber, 'phrasePunctuation:', phrasePunctuation, 'wpm:', wpm, 'time:', completeTime, 'errors:', errors, 'total char count', totalChars, 'acc:', acc)
        const trainingLog = {
          userId: session.user.id,
          wordCount: phraseLength,
          punctuation: phrasePunctuation,
          number: phraseNumber,
          wpm,
          acc,
          time: completeTime,
          characters: totalChars,
          passage: joinedPhrase.join(),
          error: errors.join()
        }
        console.log('training logged')
        logTraining(trainingLog)
      }
    }
  }, [running])

  return (
    <>
      <button type="button" onClick={() => setWordCount(10)}>10 word</button>
      <button type="button" onClick={() => setWordCount(25)}>25 word</button>
      <button type="button" onClick={() => setWordCount(50)}>50 word</button>
      <button type="button" onClick={() => setPhraseNumber(phraseNumber)}>number</button>
      <button type="button" onClick={() => setPhrasePunctuation(phrasePunctuation)}>Punctuation</button>
      <PhraseModule />
    </>
  )
}
