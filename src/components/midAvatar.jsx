import { useUser } from '@/contexts/user'

function MidAvatar() {
  const {
    customize:
    {
      outline,
      fill
    }
  } = useUser()

  return <div id="midAvatar" style={{ width: '200px', height: '200px', background: `${fill || '#6b6b6b'}`, borderRadius: '50%', border: `solid ${outline || 'gray'} 12px`, marginLeft: '20px' }} />
}

export default MidAvatar
