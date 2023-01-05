import { useUser } from '@/contexts/user'

function LostAvatar() {
  const {
    customize:
    {
      outline,
      fill
    }
  } = useUser()

  return <div id="lostAvatar" style={{ width: '150px', height: '150px', background: `${fill || '#6b6b6b'}`, borderRadius: '50%', border: `solid ${outline || 'gray'} 12px`, marginLeft: '20px' }} />
}

export default LostAvatar
