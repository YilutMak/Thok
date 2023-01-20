import { useUser } from '@/contexts/user'
import { useCheckTyped } from '@/contexts/checkTyped'
import { useEffect } from 'react'
import { useGenPhrase } from '@/contexts/genPhrase'

let avatarId = 'avatar'

function Avatar() {
  const {
    passage: { phrase }

  } = useGenPhrase()

  const {
    checkTyped: {
      wordStatus,
      charStatus }
  } = useCheckTyped()

  const {
    customize:
    {
      outline,
      fill
    }
  } = useUser()

  useEffect(() => {
    if (charStatus.length > 0) {
      if (wordStatus.length > 0) {
        const activeWordStat = (stat) => stat === 'activeWord'
        const activeCharStat = (stat) => stat === 'activeChar'
        const activeWordIndex = wordStatus.findIndex((activeWordStat))
        const activeCharIndex = charStatus[activeWordIndex][0].findIndex((activeCharStat))
        const activeWordLastChar = charStatus[activeWordIndex][0].length

        if (charStatus[activeWordIndex][0][activeCharIndex - 1] === 'incorrectChar' || charStatus[activeWordIndex][0][activeWordLastChar - 1] === 'incorrectChar') {
          avatarId = 'avatarHurt'
        } else {
          avatarId = 'avatar'
        }
      }
    }
  }, [charStatus, wordStatus, phrase])

  // console.log('charStatus:', charStatus)

  return <div id={avatarId} style={{ width: '300px', height: '300px', background: `${fill || '#6b6b6b'}`, borderRadius: '50%', border: `solid ${outline || 'gray'} 15px`, marginRight: '10px' }} />
}

export default Avatar
