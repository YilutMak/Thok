import { useEffect } from 'react'
import { useGenPhrase } from '@/contexts/genPhrase'
import PhraseModule from '@/components/phrase'
import { useCheckTyped } from '@/contexts/checkTyped'
import Timer from '@/hooks/timer'
import HealthBarDemo from '@/components/healthBarDemo'
import Avatar from '@/components/avatar'

export default function Training() {
  const {
    newPhrase
  } = useGenPhrase()

  const {
    timer: {
      running
    }
  } = useCheckTyped()

  const {
    resetPhrase
  } = Timer()

  useEffect(() => {
    newPhrase(10, false, false)
  }, [])

  useEffect(() => {
    resetPhrase()
  }, [running])

  return (
    <>
      <div className="row d-flex justify-content-center">
        <div style={{ width: '310px', marginTop: '50px' }}>
          <Avatar />
          <div style={{ marginLeft: '50px', marginTop: '20px' }}>
            <HealthBarDemo />
          </div>
        </div>
      </div>

      <div className="row text-center mx-auto" style={{ width: '850px', marginTop: '30px' }}>
        <PhraseModule />
      </div>
    </>

  )
}
