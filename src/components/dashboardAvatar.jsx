import { useUser } from '@/contexts/user'

function DashBoardAvatar() {
  const {
    customize:
    {
      outline,
      fill
    },
    borderChosen: {
      borderSelected
    },
    colorChosen: {
      colorSelected
    }
  } = useUser()

  const borderSelection = () => {
    switch (borderSelected) {
      case 1:
        return '#2d9bf0ff'
      case 2:
        return '#eeda94ff'
      case 3:
        return '#ffdcdc'
      case 4:
        return '#69737b'
      case 5:
        return '#e7f963'
      case 6:
        return '#b872c6'
      case 7:
        return '#f85e45'
      case 8:
        return '#88fdc3'
      case 9:
        return '#ffb757'
      case 10:
        return '#f650b2'
      default:
    }
    return null
  }

  const colorSelection = () => {
    switch (colorSelected) {
      case 11:
        return '#fef445'
      case 12:
        return '#f24726'
      case 13:
        return '#12cdd4'
      case 14:
        return '#fac710'
      case 15:
        return '#cee741'
      case 16:
        return '#da0063'
      case 17:
        return '#652cb3'
      case 18:
        return '#8fd14f'
      case 19:
        return '#1084fa'
      case 20:
        return '#ff4a4a'
      case 21:
        return '#8e89cc'
      case 22:
        return '#7ceeab'
      case 23:
        return '#a3a3a3ff'
      case 24:
        return '#edb6da'
      case 25:
        return '#383838'
      default:
    }
    return null
  }

  return <div id="dashboardAvatar" style={{ width: '200px', height: '200px', background: `${colorSelection() || fill}`, borderRadius: '50%', border: `solid ${borderSelection() || outline} 12px`, marginLeft: '110px' }} />
}

export default DashBoardAvatar
