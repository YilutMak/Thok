import Head from 'next/head'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, PieChart, Pie, Tooltip, Legend } from 'recharts'
import DashBoardAvatar from '@/components/dashboardAvatar'
import { useUser } from '@/contexts/user'
import useCustom from '@/hooks/custom'
import useTraining from '@/hooks/training'
import useTrials from '@/hooks/trials'
// import useExp from '@/hooks/exp'
// import useColor10 from '@/hooks/color10'
// import useTrainingPTs from '@/hooks/trainingPTs'
// import useColor50 from '@/hooks/color50'
// import useColor25 from '@/hooks/color25'
// import { useSession } from 'next-auth/react'
import TrainingBarDash from '@/components/trainingPointDash'
import { useEffect } from 'react'
import moment from 'moment'

export default function SWRIndex() {
  // const { push } = useRouter()
  // const { data: session } = useSession()

  // const {
  //   getMyExp
  // } = useExp()

  const {
  //  getMyCustom,
    newCustom
  } = useCustom()

  const {
  //  getMyCustom,
    getMyTraining
  } = useTraining()

  const {
    getMyTrials
  } = useTrials()

  // const {
  //   getMyColor10
  // } = useColor10()
  //
  // const {
  //   getMyColor25
  // } = useColor25()
  //
  // const {
  //   getMyColor50
  // } = useColor50()

  // const {
  //   getMytrainingPts
  // } = useTrainingPTs()

  const {
    user: {
      username,
      userId
    },
    lvl: {
      level
    },
    // exp: {
    //   exp
    // },
    trainingPts: {
      trainingPoints
    },
    customize:
    {
      outline,
      fill
    },
    color10: {
      color10
    },
    color25: {
      color25
    },
    color50: {
      color50
    },
    borderChosen: {
      borderSelected
    },
    colorChosen: {
      colorSelected
    },
    trainingLog: {
      training10,
      training25,
      training50
    },
    trialsLog: {
      trials10,
      trials25,
      trials50
    },
    statView: {
      viewGraph,
      viewWordCount
    },
    // setUser,
    // setLevel,
    setBorderSelected,
    setColorSelected,
    setStatView,
    setViewWordCount
  } = useUser()

  // useEffect(() => {
  //   console.log('border:', borderSelected, 'color:', colorSelected)
  // }, [borderSelected, colorSelected])

  useEffect(() => {
    console.log('viewGraph:', viewGraph, 'viewWordCount:', viewWordCount)
  }, [borderSelected, colorSelected])

  useEffect(() => {
    if (userId) {
      if (userId != null) {
        // console.log('userId:', userId)
        getMyTraining(userId)
        getMyTrials(userId)
      }
    }
  }, [userId])

  useEffect(() => {
    console.log('training10:', training10, 'training25:', training25, 'training50:', training50)
    console.log('trials10:', trials10, 'trials25:', trials25, 'trials50:', trials50)
  }, [training10, training25, training50, trials10, trials25, trials50])

  const pieChartData10 = [
    {
      name: 'incompleted trial 10',
      value: 5 - (color10 - 10),
      fill: '#ff7365'
    },
    {
      name: 'completed trial 10',
      value: color10 - 10,
      fill: '#be493eff'
    }
  ]

  const pieChartData25 = [
    {
      name: 'incompleted trial 25',
      value: 5 - (color25 - 15),
      fill: '#ffdf65'
    },
    {
      name: 'completed trial 25',
      value: color25 - 15,
      fill: '#cbac34ff'
    }
  ]

  const pieChartData50 = [
    {
      name: 'incompleted trial 50',
      value: 5 - (color50 - 20),
      fill: '#ff65f6'
    },
    {
      name: 'completed trial 50',
      value: color50 - 20,
      fill: '#c845c0ff'
    }
  ]

  const checkReward10 = () => {
    if (color10 < 11) {
      return <div className=" p-0 m-1" style={{ height: '30px', width: '30px', backgroundColor: '#fef445', borderRadius: '15px' }} />
    }
    if (color10 === 11) {
      return <div className=" p-0 m-1" style={{ height: '30px', width: '30px', backgroundColor: '#f24726', borderRadius: '15px' }} />
    }
    if (color10 === 12) {
      return <div className=" p-0 m-1" style={{ height: '30px', width: '30px', backgroundColor: '#12cdd4', borderRadius: '15px' }} />
    }
    if (color10 === 13) {
      return <div className=" p-0 m-1" style={{ height: '30px', width: '30px', backgroundColor: '#fac710', borderRadius: '15px' }} />
    }
    if (color10 === 14) {
      return <div className=" p-0 m-1" style={{ height: '30px', width: '30px', backgroundColor: '#cee741', borderRadius: '15px' }} />
    }
    if (color10 === 15) {
      return null
    }
    return null
  }

  const checkReward10Wpm = () => {
    if (color10 < 11) {
      return '40WPM'
    }
    if (color10 === 11) {
      return '60WPM'
    }
    if (color10 === 12) {
      return '80WPM'
    }
    if (color10 === 13) {
      return '100WPM'
    }
    if (color10 === 14) {
      return '120WPM'
    }
    if (color10 === 15) {
      return '100% Completion'
    }
    return null
  }

  const checkReward25 = () => {
    if (color25 < 16) {
      return <div className=" p-0 m-1" style={{ height: '30px', width: '30px', backgroundColor: '#da0063', borderRadius: '15px' }} />
    }
    if (color25 === 16) {
      return <div className=" p-0 m-1" style={{ height: '30px', width: '30px', backgroundColor: '#652cb3', borderRadius: '15px' }} />
    }
    if (color25 === 17) {
      return <div className=" p-0 m-1" style={{ height: '30px', width: '30px', backgroundColor: '#8fd14f', borderRadius: '15px' }} />
    }
    if (color25 === 18) {
      return <div className=" p-0 m-1" style={{ height: '30px', width: '30px', backgroundColor: '#1084fa', borderRadius: '15px' }} />
    }
    if (color25 === 19) {
      return <div className=" p-0 m-1" style={{ height: '30px', width: '30px', backgroundColor: '#ff4a4a', borderRadius: '15px' }} />
    }
    if (color25 === 20) {
      return null
    }
    return null
  }

  const checkReward25Wpm = () => {
    if (color25 < 16) {
      return '40WPM'
    }
    if (color25 === 16) {
      return '60WPM'
    }
    if (color25 === 17) {
      return '80WPM'
    }
    if (color25 === 18) {
      return '100WPM'
    }
    if (color25 === 19) {
      return '120WPM'
    }
    if (color25 === 20) {
      return '100% Completion'
    }
    return null
  }

  const checkReward50 = () => {
    if (color50 < 21) {
      return <div className=" p-0 m-1" style={{ height: '30px', width: '30px', backgroundColor: '#8e89cc', borderRadius: '15px' }} />
    }
    if (color50 === 21) {
      return <div className=" p-0 m-1" style={{ height: '30px', width: '30px', backgroundColor: '#7ceeab', borderRadius: '15px' }} />
    }
    if (color50 === 22) {
      return <div className=" p-0 m-1" style={{ height: '30px', width: '30px', backgroundColor: '#a3a3a3ff', borderRadius: '15px' }} />
    }
    if (color50 === 23) {
      return <div className=" p-0 m-1" style={{ height: '30px', width: '30px', backgroundColor: '#edb6da', borderRadius: '15px' }} />
    }
    if (color50 === 24) {
      return <div className=" p-0 m-1" style={{ height: '30px', width: '30px', backgroundColor: '#383838', borderRadius: '15px' }} />
    }
    if (color50 === 25) {
      return null
    }
    return null
  }

  const checkReward50Wpm = () => {
    if (color50 < 21) {
      return '40WPM'
    }
    if (color50 === 21) {
      return '60WPM'
    }
    if (color50 === 22) {
      return '80WPM'
    }
    if (color50 === 23) {
      return '100WPM'
    }
    if (color50 === 24) {
      return '120WPM'
    }
    if (color50 === 25) {
      return '100% Completion'
    }
    return null
  }

  const maxPoints = () => {
    if (trainingPoints < 100) {
      return 100
    }

    if (trainingPoints < 200 && trainingPoints >= 100) {
      return 200
    }

    if (trainingPoints < 300 && trainingPoints >= 200) {
      return 300
    }

    if (trainingPoints < 400 && trainingPoints >= 300) {
      return 400
    }

    if (trainingPoints < 500 && trainingPoints >= 400) {
      return 500
    }

    if (trainingPoints < 600 && trainingPoints >= 500) {
      return 600
    }

    if (trainingPoints < 900 && trainingPoints >= 600) {
      return 900
    }

    if (trainingPoints < 1200 && trainingPoints >= 900) {
      return 1200
    }

    if (trainingPoints < 1700 && trainingPoints >= 1200) {
      return 1200
    }

    if (trainingPoints < 2000 && trainingPoints >= 1700) {
      return 2000
    }

    if (trainingPoints > 2000) {
      return 2000
    }
    return null
  }

  const checkBorder = (border) => {
    if (border === 1) {
      if (trainingPoints < 100) {
        return 'white 11px solid'
      }
      if (borderSelected === 1) {
        return '#d6ffab 3px solid'
      }
      if (outline === '#2d9bf0ff') {
        return '#5c5c5c 3px solid'
      }
    }

    if (border === 2) {
      if (trainingPoints < 200) {
        return 'white 11px solid'
      }
      if (borderSelected === 2) {
        return '#d6ffab 3px solid'
      }
      if (outline === '#eeda94ff') {
        return '#5c5c5c 3px solid'
      }
    }

    if (border === 3) {
      if (trainingPoints < 300) {
        return 'white 11px solid'
      }
      if (borderSelected === 3) {
        return '#d6ffab 3px solid'
      }
      if (outline === '#ffdcdc') {
        return '#5c5c5c 3px solid'
      }
    }

    if (border === 4) {
      if (trainingPoints < 400) {
        return 'white 11px solid'
      }
      if (borderSelected === 4) {
        return '#d6ffab 3px solid'
      }
      if (outline === '#69737b') {
        return '#5c5c5c 3px solid'
      }
    }

    if (border === 5) {
      if (trainingPoints < 500) {
        return 'white 11px solid'
      }
      if (borderSelected === 5) {
        return '#d6ffab 3px solid'
      }
      if (outline === '#e7f963') {
        return '#5c5c5c 3px solid'
      }
    }

    if (border === 6) {
      if (trainingPoints < 600) {
        return 'white 11px solid'
      }
      if (borderSelected === 6) {
        return '#d6ffab 3px solid'
      }
      if (outline === '#b872c6') {
        return '#5c5c5c 3px solid'
      }
    }

    if (border === 7) {
      if (trainingPoints < 900) {
        return 'white 11px solid'
      }
      if (borderSelected === 7) {
        return '#d6ffab 3px solid'
      }
      if (outline === '#f85e45') {
        return '#5c5c5c 3px solid'
      }
    }

    if (border === 8) {
      if (trainingPoints < 1200) {
        return 'white 11px solid'
      }
      if (borderSelected === 8) {
        return '#d6ffab 3px solid'
      }
      if (outline === '#88fdc3') {
        return '#5c5c5c 3px solid'
      }
    }

    if (border === 9) {
      if (trainingPoints < 1700) {
        return 'white 11px solid'
      }
      if (borderSelected === 9) {
        return '#d6ffab 3px solid'
      }
      if (outline === '#ffb757') {
        return '#5c5c5c 3px solid'
      }
    }

    if (border === 10) {
      if (trainingPoints < 2000) {
        return 'white 11px solid'
      }
      if (borderSelected === 10) {
        return '#d6ffab 3px solid'
      }
      if (outline === '#f650b2') {
        return '#5c5c5c 3px solid'
      }
    }
    return null
  }

  const checkColor = (color) => {
    if (color === 11) {
      if (color10 < 11) {
        return 'white 11px solid'
      }
      if (colorSelected === 11) {
        return '#d6ffab 3px solid'
      }
      if (fill === '#fef445') {
        return '#5c5c5c 3px solid'
      }
    }

    if (color === 12) {
      if (color10 < 12) {
        return 'white 11px solid'
      }
      if (colorSelected === 12) {
        return '#d6ffab 3px solid'
      }
      if (fill === '#f24726') {
        return '#5c5c5c 3px solid'
      }
    }

    if (color === 13) {
      if (color10 < 13) {
        return 'white 11px solid'
      }
      if (colorSelected === 13) {
        return '#d6ffab 3px solid'
      }
      if (fill === '#12cdd4') {
        return '#5c5c5c 3px solid'
      }
    }

    if (color === 14) {
      if (color10 < 14) {
        return 'white 11px solid'
      }
      if (colorSelected === 14) {
        return '#d6ffab 3px solid'
      }
      if (fill === '#fac710') {
        return '#5c5c5c 3px solid'
      }
    }

    if (color === 15) {
      if (color10 < 15) {
        return 'white 11px solid'
      }
      if (colorSelected === 15) {
        return '#d6ffab 3px solid'
      }
      if (fill === '#cee741') {
        return '#5c5c5c 3px solid'
      }
    }

    if (color === 16) {
      if (color25 < 16) {
        return 'white 11px solid'
      }
      if (colorSelected === 16) {
        return '#d6ffab 3px solid'
      }
      if (fill === '#da0063') {
        return '#5c5c5c 3px solid'
      }
    }

    if (color === 17) {
      if (color25 < 17) {
        return 'white 11px solid'
      }
      if (colorSelected === 17) {
        return '#d6ffab 3px solid'
      }
      if (fill === '#652cb3') {
        return '#5c5c5c 3px solid'
      }
    }

    if (color === 18) {
      if (color25 < 18) {
        return 'white 11px solid'
      }
      if (colorSelected === 18) {
        return '#d6ffab 3px solid'
      }
      if (fill === '#8fd14f') {
        return '#5c5c5c 3px solid'
      }
    }

    if (color === 19) {
      if (color25 < 19) {
        return 'white 11px solid'
      }
      if (colorSelected === 19) {
        return '#d6ffab 3px solid'
      }
      if (fill === '#1084fa') {
        return '#5c5c5c 3px solid'
      }
    }

    if (color === 20) {
      if (color25 < 20) {
        return 'white 11px solid'
      }
      if (colorSelected === 20) {
        return '#d6ffab 3px solid'
      }
      if (fill === '#ff4a4a') {
        return '#5c5c5c 3px solid'
      }
    }

    if (color === 21) {
      if (color50 < 21) {
        return 'white 11px solid'
      }
      if (colorSelected === 21) {
        return '#d6ffab 3px solid'
      }
      if (fill === '#8e89cc') {
        return '#5c5c5c 3px solid'
      }
    }

    if (color === 22) {
      if (color50 < 22) {
        return 'white 11px solid'
      }
      if (colorSelected === 22) {
        return '#d6ffab 3px solid'
      }
      if (fill === '#7ceeab') {
        return '#5c5c5c 3px solid'
      }
    }

    if (color === 23) {
      if (color50 < 23) {
        return 'white 11px solid'
      }
      if (colorSelected === 23) {
        return '#d6ffab 3px solid'
      }
      if (fill === '#a3a3a3ff') {
        return '#5c5c5c 3px solid'
      }
    }

    if (color === 24) {
      if (color50 < 24) {
        return 'white 11px solid'
      }
      if (colorSelected === 24) {
        return '#d6ffab 3px solid'
      }
      if (fill === '#edb6da') {
        return '#5c5c5c 3px solid'
      }
    }

    if (color === 25) {
      if (color50 < 25) {
        return 'white 11px solid'
      }
      if (colorSelected === 25) {
        return '#d6ffab 3px solid'
      }
      if (fill === '#383838') {
        return '#5c5c5c 3px solid'
      }
    }
    return null
  }

  const checkTrainingReward = () => {
    if (trainingPoints < 100) {
      return <div className=" p-0 m-1" style={{ height: '30px', width: '30px', backgroundColor: '#2d9bf0ff', borderRadius: '15px' }} />
    }
    if (trainingPoints <= 200 && trainingPoints >= 100) {
      return <div className=" p-0 m-1" style={{ height: '30px', width: '30px', backgroundColor: '#eeda94ff', borderRadius: '15px' }} />
    }
    if (trainingPoints <= 300 && trainingPoints >= 200) {
      return <div className=" p-0 m-1" style={{ height: '30px', width: '30px', backgroundColor: '#ffdcdc', borderRadius: '15px' }} />
    }
    if (trainingPoints <= 400 && trainingPoints >= 300) {
      return <div className=" p-0 m-1" style={{ height: '30px', width: '30px', backgroundColor: '#69737b', borderRadius: '15px' }} />
    }
    if (trainingPoints <= 500 && trainingPoints >= 400) {
      return <div className=" p-0 m-1" style={{ height: '30px', width: '30px', backgroundColor: '#e7f963', borderRadius: '15px' }} />
    }
    if (trainingPoints <= 600 && trainingPoints >= 500) {
      return <div className=" p-0 m-1" style={{ height: '30px', width: '30px', backgroundColor: '#b872c6', borderRadius: '15px' }} />
    }
    if (trainingPoints <= 900 && trainingPoints >= 600) {
      return <div className=" p-0 m-1" style={{ height: '30px', width: '30px', backgroundColor: '#f85e45', borderRadius: '15px' }} />
    }
    if (trainingPoints <= 1200 && trainingPoints >= 900) {
      return <div className=" p-0 m-1" style={{ height: '30px', width: '30px', backgroundColor: '#88fdc3', borderRadius: '15px' }} />
    }
    if (trainingPoints <= 1700 && trainingPoints >= 1200) {
      return <div className=" p-0 m-1" style={{ height: '30px', width: '30px', backgroundColor: '#ffb757', borderRadius: '15px' }} />
    }
    if (trainingPoints <= 2000 && trainingPoints >= 1700) {
      return <div className=" p-0 m-1" style={{ height: '30px', width: '30px', backgroundColor: '#f650b2', borderRadius: '15px' }} />
    }
    if (trainingPoints >= 2000) {
      return <h4>null</h4>
    }
    return null
  }

  const setBorder = (border) => {
    console.log('click:', border, 'setBorderSelected:', setBorderSelected)
    if (border !== borderSelected) {
      setBorderSelected(border)
    }
    if (border === borderSelected) {
      console.log('set border back to 0')
      setBorderSelected(0)
    }
  }

  const setColor = (color) => {
    console.log('click:', color, 'setColorSelected:', setColorSelected)
    if (color !== colorSelected) {
      setColorSelected(color)
    }
    if (color === colorSelected) {
      console.log('set Color back to 0')
      setColorSelected(0)
    }
  }

  const setNewCustom = (border, color) => {
    console.log(border, color)

    const borderColor = () => {
      if (border === 1 && trainingPoints >= 100) {
        return '#2d9bf0ff'
      }
      if (border === 2 && trainingPoints >= 200) {
        return '#eeda94ff'
      }
      if (border === 3 && trainingPoints >= 300) {
        return '#ffdcdc'
      }
      if (border === 4 && trainingPoints >= 400) {
        return '#69737b'
      }
      if (border === 5 && trainingPoints >= 500) {
        return '#e7f963'
      }
      if (border === 6 && trainingPoints >= 600) {
        return '#b872c6'
      }
      if (border === 7 && trainingPoints >= 900) {
        return '#f85e45'
      }
      if (border === 8 && trainingPoints >= 1200) {
        return '#88fdc3'
      }
      if (border === 9 && trainingPoints >= 1700) {
        return '#ffb757'
      }
      if (border === 10 && trainingPoints >= 2000) {
        return '#f650b2'
      }
      return 'gray'
    }

    const fillColor = () => {
      if (color === 11 && color10 >= 11) {
        return '#fef445'
      }
      if (color === 12 && color10 >= 12) {
        return '#f24726'
      }
      if (color === 13 && color10 >= 13) {
        return '#12cdd4'
      }
      if (color === 14 && color10 >= 14) {
        return '#fac710'
      }
      if (color === 15 && color10 >= 15) {
        return '#cee741'
      }
      if (color === 16 && color25 >= 16) {
        return '#da0063'
      }
      if (color === 17 && color25 >= 17) {
        return '#652cb3'
      }
      if (color === 18 && color25 >= 18) {
        return '#8fd14f'
      }
      if (color === 19 && color25 >= 19) {
        return '#1084fa'
      }
      if (color === 20 && color25 >= 20) {
        return '#ff4a4a'
      }
      if (color === 21 && color50 >= 21) {
        return '#8e89cc'
      }
      if (color === 22 && color50 >= 22) {
        return '#7ceeab'
      }
      if (color === 23 && color50 >= 23) {
        return '#a3a3a3ff'
      }
      if (color === 24 && color50 >= 24) {
        return '#edb6da'
      }
      if (color === 25 && color50 >= 25) {
        return '#383838'
      }
      return '#6b6b6b'
    }

    const custom = {
      userId,
      outline: borderColor(),
      fill: fillColor()
    }

    console.log('custom:', custom)
    newCustom(custom)
  }

  const genStat = () => {
    const data = []

    if (viewGraph === 'training') {
      if (viewWordCount === 10) {
        training10.map((session, i) => data.push({ name: i + 1, wpm: session.wpm }))
      }
      if (viewWordCount === 25) {
        training25.map((session, i) => data.push({ name: i + 1, wpm: session.wpm }))
      }
      if (viewWordCount === 50) {
        training50.map((session, i) => data.push({ name: i + 1, wpm: session.wpm }))
      }
    }
    if (viewGraph === 'trials') {
      if (viewWordCount === 10) {
        trials10.map((session, i) => data.push({ name: i + 1, wpm: session.wpm }))
      }
      if (viewWordCount === 25) {
        trials25.map((session, i) => data.push({ name: i + 1, wpm: session.wpm }))
      }
      if (viewWordCount === 50) {
        trials50.map((session, i) => data.push({ name: i + 1, wpm: session.wpm }))
      }
    }
    return data
  }

  const checkGraphType = (data) => {
    if (viewGraph === 'training' && data === 'training') {
      return '#98c3cf'
    }
    if (viewGraph === 'trials' && data === 'trials') {
      return '#98c3cf'
    }
    return '#bccdd2'
  }

  const checkGraphWordCount = (data) => {
    if (viewWordCount === 10 && data === 10) {
      return '#98c3cf'
    }
    if (viewWordCount === 25 && data === 25) {
      return '#98c3cf'
    }
    if (viewWordCount === 50 && data === 50) {
      return '#98c3cf'
    }
    return '#bccdd2'
  }

  const sessionStats = () => {
    let sessionWpm
    let sessionTime
    let sessionError
    let sessionNum
    let sessionPunc
    let sessionChar

    if (viewGraph === 'training') {
      if (viewWordCount === 10) {
        if (training10.length > 0) {
          const wpmArray = training10.map((session) => session.wpm)
          const index = wpmArray.indexOf(Math.max(...wpmArray))
          console.log('best session id:', wpmArray.indexOf(Math.max(...wpmArray)))
          console.log('best session:', training10[index].wpm)
          sessionWpm = training10[index].wpm
          sessionTime = moment(training10[index].time).format('ss:SS')
          sessionError = training10[index].error
          sessionNum = training10[index].number
          sessionPunc = training10[index].punctuation
          sessionChar = training10[index].characters
        }
      }
      if (viewWordCount === 25) {
        if (training25.length > 0) {
          const wpmArray = training25.map((session) => session.wpm)
          const index = wpmArray.indexOf(Math.max(...wpmArray))
          console.log('best session id:', wpmArray.indexOf(Math.max(...wpmArray)))
          console.log('best session:', training25[index].wpm)
          sessionWpm = training25[index].wpm
          sessionTime = moment(training25[index].time).format('ss:SS')
          sessionError = training25[index].error
          sessionNum = training25[index].number
          sessionPunc = training25[index].punctuation
          sessionChar = training25[index].characters
        }
      }
      if (viewWordCount === 50) {
        if (training50.length > 0) {
          const wpmArray = training50.map((session) => session.wpm)
          const index = wpmArray.indexOf(Math.max(...wpmArray))
          console.log('best session id:', wpmArray.indexOf(Math.max(...wpmArray)))
          console.log('best session:', training50[index].wpm)
          sessionWpm = training50[index].wpm
          sessionTime = moment(training50[index].time).format('ss:SS')
          sessionError = training50[index].error
          sessionNum = training50[index].number
          sessionPunc = training50[index].punctuation
          sessionChar = training50[index].characters
        }
      }
    }

    if (viewGraph === 'trials') {
      if (viewWordCount === 10) {
        if (trials10.length > 0) {
          const wpmArray = trials10.map((session) => session.wpm)
          const index = wpmArray.indexOf(Math.max(...wpmArray))
          console.log('best session id:', wpmArray.indexOf(Math.max(...wpmArray)))
          console.log('best session:', trials10[index].wpm)
          sessionWpm = trials10[index].wpm
          sessionTime = moment(trials10[index].time).format('ss:SS')
          sessionError = trials10[index].error
          sessionNum = trials10[index].number
          sessionPunc = trials10[index].punctuation
          sessionChar = trials10[index].characters
        }
      }
      if (viewWordCount === 25) {
        if (trials25.length > 0) {
          const wpmArray = trials25.map((session) => session.wpm)
          const index = wpmArray.indexOf(Math.max(...wpmArray))
          console.log('best session id:', wpmArray.indexOf(Math.max(...wpmArray)))
          console.log('best session:', trials25[index].wpm)
          sessionWpm = trials25[index].wpm
          sessionTime = moment(trials25[index].time).format('ss:SS')
          sessionError = trials25[index].error
          sessionNum = trials25[index].number
          sessionPunc = trials25[index].punctuation
          sessionChar = trials25[index].characters
        }
      }
      if (viewWordCount === 50) {
        if (trials50.length > 0) {
          const wpmArray = trials50.map((session) => session.wpm)
          const index = wpmArray.indexOf(Math.max(...wpmArray))
          console.log('best session id:', wpmArray.indexOf(Math.max(...wpmArray)))
          console.log('best session:', trials50[index].wpm)
          sessionWpm = trials50[index].wpm
          sessionTime = moment(trials50[index].time).format('ss:SS')
          sessionError = trials50[index].error
          sessionNum = trials50[index].number
          sessionPunc = trials50[index].punctuation
          sessionChar = trials50[index].characters
        }
      }
    }
    return (
      <>
        <h7>Wpm: {sessionWpm || '0'}</h7><br />
        <h7>Characters: {sessionChar || '0'}</h7><br />
        <h7>Time: {sessionTime || '00:00'}s</h7><br />
        <h7>Error: {sessionError || 'none'}</h7><br />
        <h7>Num: {`${sessionNum}`}</h7><br />
        <h7>Punc: {`${sessionPunc}`}</h7>
      </>
    )
  }

  return (
    <div>
      <Head>
        <title>user dashboard</title>
      </Head>
      <div className="d-flex justify-content-center" style={{ marginTop: '30px', color: '#787777' }}>
        <div className="col-3" style={{ background: '', height: '800px', width: '30%', minWidth: '450px', maxWidth: '450px' }}>
          <div className="row " style={{ height: '800px', width: '97%', margin: '0px' }}>
            <div style={{ background: '#e7f2f5', borderRadius: '60px', minWidth: '360px' }}>
              <div className="text-center">
                <h1 style={{ marginTop: '20px' }}>User</h1>
                <div style={{ marginTop: '25px' }}>
                  <DashBoardAvatar />
                </div>
                <h6 style={{ marginTop: '20px' }}>Username: {username}</h6>
                <h6>Lv: {level}</h6>
              </div>

              <div className="" style={{ marginLeft: '85px' }}>
                <h6 style={{ marginTop: '20px', marginBottom: '10px' }}>Borders</h6>
                <div>
                  <div className="row m-0">
                    <div className=" p-0" style={{ height: '30px', width: '30px', backgroundColor: '#2d9bf0ff', borderRadius: '15px', border: checkBorder(1) }} onClick={() => setBorder(1)} />
                    <div className=" p-0" style={{ height: '30px', width: '30px', backgroundColor: '#eeda94ff', borderRadius: '15px', marginLeft: '25px', border: checkBorder(2) }} onClick={() => setBorder(2)} />
                    <div className=" p-0" style={{ height: '30px', width: '30px', backgroundColor: '#ffdcdc', borderRadius: '15px', marginLeft: '25px', border: checkBorder(3) }} onClick={() => setBorder(3)} />
                    <div className=" p-0" style={{ height: '30px', width: '30px', backgroundColor: '#69737b', borderRadius: '15px', marginLeft: '25px', border: checkBorder(4) }} onClick={() => setBorder(4)} />
                    <div className=" p-0" style={{ height: '30px', width: '30px', backgroundColor: '#e7f963', borderRadius: '15px', marginLeft: '25px', border: checkBorder(5) }} onClick={() => setBorder(5)} />
                  </div>
                  <div className="row  mt-4 m-0">
                    <div className=" p-0" style={{ height: '30px', width: '30px', backgroundColor: '#b872c6', borderRadius: '15px', border: checkBorder(6) }} onClick={() => setBorder(6)} />
                    <div className=" p-0" style={{ height: '30px', width: '30px', backgroundColor: '#f85e45', borderRadius: '15px', marginLeft: '25px', border: checkBorder(7) }} onClick={() => setBorder(7)} />
                    <div className=" p-0" style={{ height: '30px', width: '30px', backgroundColor: '#88fdc3', borderRadius: '15px', marginLeft: '25px', border: checkBorder(8) }} onClick={() => setBorder(8)} />
                    <div className=" p-0" style={{ height: '30px', width: '30px', backgroundColor: '#ffb757', borderRadius: '15px', marginLeft: '25px', border: checkBorder(9) }} onClick={() => setBorder(9)} />
                    <div className=" p-0" style={{ height: '30px', width: '30px', backgroundColor: '#f650b2', borderRadius: '15px', marginLeft: '25px', border: checkBorder(10) }} onClick={() => setBorder(10)} />
                  </div>
                </div>
                <h6 style={{ marginTop: '30px', marginBottom: '10px' }}>Colors</h6>
                <div>
                  <div className="row m-0">
                    <div className=" p-0" style={{ height: '30px', width: '30px', backgroundColor: '#fef445', borderRadius: '15px', border: checkColor(11) }} onClick={() => setColor(11)} />
                    <div className=" p-0" style={{ height: '30px', width: '30px', backgroundColor: '#f24726', borderRadius: '15px', marginLeft: '25px', border: checkColor(12) }} onClick={() => setColor(12)} />
                    <div className=" p-0" style={{ height: '30px', width: '30px', backgroundColor: '#12cdd4', borderRadius: '15px', marginLeft: '25px', border: checkColor(13) }} onClick={() => setColor(13)} />
                    <div className=" p-0" style={{ height: '30px', width: '30px', backgroundColor: '#fac710', borderRadius: '15px', marginLeft: '25px', border: checkColor(14) }} onClick={() => setColor(14)} />
                    <div className=" p-0" style={{ height: '30px', width: '30px', backgroundColor: '#cee741', borderRadius: '15px', marginLeft: '25px', border: checkColor(15) }} onClick={() => setColor(15)} /></div>
                  <div className="row  mt-4 m-0">
                    <div className=" p-0" style={{ height: '30px', width: '30px', backgroundColor: '#da0063', borderRadius: '15px', border: checkColor(16) }} onClick={() => setColor(16)} />
                    <div className=" p-0" style={{ height: '30px', width: '30px', backgroundColor: '#652cb3', borderRadius: '15px', marginLeft: '25px', border: checkColor(17) }} onClick={() => setColor(17)} />
                    <div className=" p-0" style={{ height: '30px', width: '30px', backgroundColor: '#8fd14f', borderRadius: '15px', marginLeft: '25px', border: checkColor(18) }} onClick={() => setColor(18)} />
                    <div className=" p-0" style={{ height: '30px', width: '30px', backgroundColor: '#1084fa', borderRadius: '15px', marginLeft: '25px', border: checkColor(19) }} onClick={() => setColor(19)} />
                    <div className=" p-0" style={{ height: '30px', width: '30px', backgroundColor: '#ff4a4a', borderRadius: '15px', marginLeft: '25px', border: checkColor(20) }} onClick={() => setColor(20)} />
                  </div>
                  <div className="row mt-4 m-0">
                    <div className=" p-0" style={{ height: '30px', width: '30px', backgroundColor: '#8e89cc', borderRadius: '15px', border: checkColor(21) }} onClick={() => setColor(21)} />
                    <div className=" p-0" style={{ height: '30px', width: '30px', backgroundColor: '#7ceeab', borderRadius: '15px', marginLeft: '25px', border: checkColor(22) }} onClick={() => setColor(22)} />
                    <div className=" p-0" style={{ height: '30px', width: '30px', backgroundColor: '#a3a3a3ff', borderRadius: '15px', marginLeft: '25px', border: checkColor(23) }} onClick={() => setColor(23)} />
                    <div className=" p-0" style={{ height: '30px', width: '30px', backgroundColor: '#edb6da', borderRadius: '15px', marginLeft: '25px', border: checkColor(24) }} onClick={() => setColor(24)} />
                    <div className=" p-0" style={{ height: '30px', width: '30px', backgroundColor: '#383838', borderRadius: '15px', marginLeft: '25px', border: checkColor(25) }} onClick={() => setColor(25)} />
                  </div>
                </div>
                <button type="button" className="btn" style={{ marginTop: '35px', background: '#ff7365', color: 'white', width: '100px', marginLeft: '75px' }} onClick={() => setNewCustom(borderSelected, colorSelected)}>Save</button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-9" style={{ background: '', height: '800px', width: '70%', minWidth: '1100px', maxWidth: '1100px' }}>
          <div className="row" style={{ height: '400px', margin: '0px' }}>
            <div className="text-center" style={{ background: '#e7f2f5', borderRadius: '60px', overflow: 'hidden' }}>
              <h1 style={{ marginTop: '20px', marginBottom: '10px' }}>Statistics</h1>

              <div className="" style={{ marginBottom: '0px' }}>
                <button type="button" className="btn" style={{ color: 'white', background: checkGraphType('training'), width: '180px', height: '28px', marginLeft: '5px', fontSize: '12px' }} onClick={() => setStatView('training')}>Training</button>
                <button type="button" className="btn" style={{ color: 'white', background: checkGraphType('trials'), width: '180px', height: '28px', marginLeft: '5px', fontSize: '12px' }} onClick={() => setStatView('trials')}>Trials</button>
                <button type="button" className="btn" style={{ color: 'white', background: checkGraphWordCount(10), width: '180px', height: '28px', marginLeft: '5px', fontSize: '12px' }} onClick={() => setViewWordCount(10)}>10 words</button>
                <button type="button" className="btn" style={{ color: 'white', background: checkGraphWordCount(25), width: '180px', height: '28px', marginLeft: '5px', fontSize: '12px' }} onClick={() => setViewWordCount(25)}>25 words</button>
                <button type="button" className="btn" style={{ color: 'white', background: checkGraphWordCount(50), width: '180px', height: '28px', marginLeft: '5px', fontSize: '12px' }} onClick={() => setViewWordCount(50)}>50 words</button>
              </div>

              <div className="row">
                <div className="col" style={{ marginTop: '10px', marginLeft: '25px', width: '740px' }}>
                  <LineChart
                    width={730}
                    height={270}
                    data={genStat()}
                    margin={{ top: 15, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="wpm" stroke="#85beca" />
                  </LineChart>
                </div>
                <div className="col text-left" style={{ marginTop: '40px', marginRight: '80px' }}>
                  <h4>Session best:</h4>
                  {sessionStats()}
                </div>
              </div>
            </div>
          </div>

          <div className="row " style={{ height: '400px', margin: '0px', minWidth: '1100px', maxWidth: '1100px' }}>
            <div className="row " style={{ height: '385px', width: '750px', padding: '0px', marginTop: '15px', marginLeft: '0px', marginRight: '0px' }}>
              <div className="text-center" style={{ background: '#e7f2f5', borderRadius: '60px', padding: '0px', height: '385px' }}>
                <div className="row">
                  <h1 style={{ marginTop: '20px', marginBottom: '5px' }}>Trials Completion</h1>
                </div>

                <div className="row ">
                  <div className="col-4" style={{ padding: '0px' }}>
                    <div style={{ marginLeft: '70px', padding: '0px', marginBottom: '5px' }}>
                      <PieChart width={200} height={180}>
                        <Pie startAngle={-270} data={pieChartData10} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} fill="#8884d8" />
                      </PieChart>
                    </div>
                    <div style={{ marginLeft: '80px' }}>
                      <div className="d-flex justify-content-center" style={{ marginBottom: '5px' }}>
                        {checkReward10()}
                      </div>
                      <h6 style={{ marginBottom: '0px' }}>next reward:</h6>
                      <b>{checkReward10Wpm()}</b>
                    </div>

                  </div>
                  <div className="col-4">
                    <div style={{ marginLeft: '20px', padding: '0px', marginBottom: '5px' }}>
                      <PieChart width={200} height={180}>
                        <Pie startAngle={-270} data={pieChartData25} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} fill="#8884d8" />
                      </PieChart>
                    </div>
                    <div style={{ marginLeft: '10px' }}>
                      <div className="d-flex justify-content-center" style={{ marginBottom: '5px' }}>
                        {checkReward25()}
                      </div>
                      <h6 style={{ marginBottom: '0px' }}>next reward:</h6>
                      <b>{checkReward25Wpm()}</b>
                    </div>

                  </div>
                  <div className="col-4">
                    <div style={{ padding: '0px', marginBottom: '5px', marginLeft: '-20px' }}>
                      <PieChart width={200} height={180}>
                        <Pie startAngle={-270} data={pieChartData50} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} fill="#8884d8" />
                      </PieChart>
                    </div>
                    <div style={{ marginLeft: '-65px' }}>
                      <div className="d-flex justify-content-center" style={{ marginBottom: '5px' }}>
                        {checkReward50()}
                      </div>
                      <h6 style={{ marginBottom: '0px' }}>next reward:</h6>
                      <b>{checkReward50Wpm()}</b>

                    </div>

                  </div>
                </div>

              </div>
            </div>
            <div className="row " style={{ height: '385px', width: '335px', padding: '0px', marginTop: '15px', marginLeft: '15px' }}>
              <div className="text-center" style={{ background: '#e7f2f5', borderRadius: '60px', overflow: 'hidden' }}>
                <h1 style={{ marginTop: '20px', marginBottom: '15px' }}>Training</h1>
                <h7>Training points:</h7>
                <h5>{trainingPoints}/{maxPoints()} </h5>

                <div className="d-flex justify-content-center" style={{ marginBottom: '10px' }}>
                  <TrainingBarDash />
                </div>

                <div className="row mt-2">
                  <h6 className="col-7 d-flex flex-row-reverse" style={{ marginTop: '9px', padding: '0px', paddingRight: '8px' }}>next reward:</h6>
                  <b className="col-5" style={{ padding: '0px', marginBottom: '20px' }}>{checkTrainingReward()}</b>
                  <h6>total sessions: <b>{training10.length + training25.length + training50.length}</b></h6>
                  <h6>10 words: <b>{training10.length}</b></h6>
                  <h6>25 words: <b>{training25.length}</b></h6>
                  <h6>50 words: <b>{training50.length}</b></h6>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}
