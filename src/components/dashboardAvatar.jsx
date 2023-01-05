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
        break
      case 2:
        return '#eeda94ff'
        break
      case 3:
        return '#ffdcdc'
        break
      case 4:
        return '#69737b'
        break
      case 5:
        return '#e7f963'
        break
      case 6:
        return '#b872c6'
        break
      case 7:
        return '#f85e45'
        break
      case 8:
        return '#88fdc3'
        break
      case 9:
        return '#ffb757'
        break
      case 10:
        return '#f650b2'
        break
      default:
        break
    }
    return null
  }

  const colorSelection = () => {
    switch (colorSelected) {
      case 11:
        return '#fef445'
        break
      case 12:
        return '#f24726'
        break
      case 13:
        return '#12cdd4'
        break
      case 14:
        return '#fac710'
        break
      case 15:
        return '#cee741'
        break
      case 16:
        return '#da0063'
        break
      case 17:
        return '#652cb3'
        break
      case 18:
        return '#8fd14f'
        break
      case 19:
        return '#1084fa'
        break
      case 20:
        return '#ff4a4a'
        break
      case 21:
        return '#8e89cc'
        break
      case 22:
        return '#7ceeab'
        break
      case 23:
        return '#a3a3a3ff'
        break
      case 24:
        return '#edb6da'
        break
      case 25:
        return '#383838'
        break
      default:
        break
    }
    return null
  }

  return <div id="dashboardAvatar" style={{ width: '200px', height: '200px', background: `${colorSelection() || fill}`, borderRadius: '50%', border: `solid ${borderSelection() || outline} 12px`, marginLeft: '110px' }} />
}

export default DashBoardAvatar
