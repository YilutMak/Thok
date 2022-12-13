import { useGenPhrase } from '@/contexts/genPhrase'
import PhraseModule from '@/components/phrase'

export default function Training() {
  const {
    genPhraseLength: { phraseNumber, phrasePunctuation },
    setWordCount,
    setPhraseNumber,
    setPhrasePunctuation
  } = useGenPhrase()

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
