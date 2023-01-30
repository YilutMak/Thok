import { useTyping } from '@/contexts/typing'

export default function UseKeyListener() {
  const {
    // typedPassage: { typed },
    typing
  } = useTyping()

  const keyDownHandler = (e) => {
    e.preventDefault()
    if (e.repeat) return
    typing(e.key)
  }

  const keyDownAdd = () => {
    document.addEventListener('keydown', keyDownHandler)
  }

  const keyDownDelete = () => {
    document.removeEventListener('keydown', keyDownHandler)
  }

  const data = {
    keyDownAdd,
    keyDownDelete
  }
  return data
}
