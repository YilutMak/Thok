import React, { useState, createContext, useContext } from 'react'
import produce from 'immer'

const userContext = createContext()

const initialUser = {
  username: null,
  userId: null
}

const initialLevel = {
  level: 0
}

const initialHp = {
  hp: 1
}

const initialExp = {
  exp: 5
}

const initialTrainingPts = {
  trainingPoints: null
}

const initialCustom = {
  outline: null,
  fill: null
}

const initialColor10 = {
  color10: 0
}

const initialColor25 = {
  color25: 0
}

const initialColor50 = {
  color50: 0
}

const initialRate = {
  rate: 1.3
}

const initialRewards = {
  nextTrainingReward: null
}

const initial10Rewards = {
  nextTrials10Reward: null
}

const initial25Rewards = {

  nextTrials25Reward: null
}

const initial50Rewards = {
  nextTrials50Reward: null
}

const initialBorderSelect = {
  borderSelected: null
}

const initialColorSelect = {
  colorSelected: null
}

const initialTraining = {
  training10: [],
  training25: [],
  training50: []
}

const initialTrials = {
  trials10: [],
  trials25: [],
  trials50: []
}

const initialStatistics = {
  viewGraph: 'training',
  viewWordCount: 10
}

export function UserProvider({ children }) {
  const [userState, setUserState] = useState(initialUser)
  const [levelState, setLevelState] = useState(initialLevel)
  const [expState, setExpState] = useState(initialExp)
  const [trainingPtsState, setTrainingPtsState] = useState(initialTrainingPts)
  const [customState, setCustomState] = useState(initialCustom)
  const [color10State, setColor10State] = useState(initialColor10)
  const [color25State, setColor25State] = useState(initialColor25)
  const [color50State, setColor50State] = useState(initialColor50)
  const [hpState, setHpState] = useState(initialHp)
  const [rateState, setRateState] = useState(initialRate)
  const [nextTrainingRewardState, setNextTrainingRewardState] = useState(initialRewards)
  const [next10RewardState, setNext10RewardState] = useState(initial10Rewards)
  const [next25RewardState, setNext25RewardState] = useState(initial25Rewards)
  const [next50RewardState, setNext50RewardState] = useState(initial50Rewards)
  const [borderSelectState, setBorderSelectState] = useState(initialBorderSelect)
  const [colorSelectState, setColorSelectState] = useState(initialColorSelect)
  const [trainingState, setTrainingState] = useState(initialTraining)
  const [trialsState, setTrialsState] = useState(initialTrials)
  const [statState, setStatState] = useState(initialStatistics)

  const setUser = async (data) => {
    // console.log('userdata:', data.id)
    const { name } = data
    const idNum = data.id
    setUserState(produce(userState, (draft) => {
      draft.username = name
      draft.userId = idNum
    }))
  }

  const setLevel = async (exp) => {
    // console.log('exp:', exp)
    // const lvl = (exp / ((10 * (1 + (0.1))))) + 1

    // set level with exp
    const lvl = Math.floor(Math.log((exp / 5)) / Math.log((rateState.rate)))
    setLevelState(produce(levelState, (draft) => {
      draft.level = lvl
    }))

    // set hp with level
    const health = Math.ceil(1 * (1.1 ** lvl))
    setHpState(produce(hpState, (draft) => {
      draft.hp = health
    }))
  }

  const setNextTrainingReward = async (hex) => {
    setNextTrainingRewardState(produce(next10RewardState, (draft) => {
      draft.nextTrainingReward = hex
    }))
  }

  const setNext10Reward = async (hex, wpm) => {
    setNext10RewardState(produce(next10RewardState, (draft) => {
      draft.nextTrials10Reward = hex
      draft.nextTrials10wpm = wpm
    }))
  }
  const setNext25Reward = async (hex, wpm) => {
    setNext25RewardState(produce(next25RewardState, (draft) => {
      draft.nextTrials25Reward = hex
      draft.nextTrials25wpm = wpm
    }))
  }
  const setNext50Reward = async (hex, wpm) => {
    setNext50RewardState(produce(next50RewardState, (draft) => {
      draft.nextTrials50Reward = hex
      draft.nextTrials50wpm = wpm
    }))
  }

  const setExp = async (data) => {
    const exp = data?.exp || 5

    setExpState(produce(expState, (draft) => {
      draft.exp = exp
    }))
  }

  const setTrainingPts = async (data) => {
    // console.log('training points:', data.trainingPts)
    const points = data?.trainingPts || 0

    setTrainingPtsState(produce(trainingPtsState, (draft) => {
      draft.trainingPoints = points
    }))
  }

  const setCustom = async (data) => {
    console.log('getcustom:', data)

    const outline = data?.outline || 'gray'
    const fill = data?.fill || '#6b6b6b'

    setCustomState(produce(customState, (draft) => {
      draft.outline = outline
      draft.fill = fill
    }))
  }

  const setColor10 = async (data) => {
    console.log('setcolor10', data.color)
    setColor10State(produce(color10State, (draft) => {
      draft.color10 = data.color
    }))
  }

  const setColor25 = async (data) => {
    setColor25State(produce(color25State, (draft) => {
      draft.color25 = data.color
    }))
  }

  const setColor50 = async (data) => {
    setColor50State(produce(color50State, (draft) => {
      draft.color50 = data.color
    }))
  }

  const foundColor10 = async (data) => {
    // console.log('foundColor10', data.color10?.color)
    setColor10State(produce(color10State, (draft) => {
      draft.color10 = data.color10?.color || 0
    }))
  }

  const foundColor25 = async (data) => {
    // console.log('foundColor25', data.color25?.color)
    setColor25State(produce(color25State, (draft) => {
      draft.color25 = data.color25?.color || 0
    }))
  }

  const foundColor50 = async (data) => {
    // console.log('foundColor50', data.color50?.color)
    setColor50State(produce(color50State, (draft) => {
      draft.color50 = data.color50?.color || 0
    }))
  }

  const setBorderSelected = async (color) => {
    setBorderSelectState(produce(borderSelectState, (draft) => {
      draft.borderSelected = color
    }))
  }

  const setColorSelected = async (color) => {
    setColorSelectState(produce(colorSelectState, (draft) => {
      draft.colorSelected = color
    }))
  }

  const setTrainingLog = async (data) => {
    console.log('traininglog data:', data.training)

    const traininglog10 = []
    const traininglog25 = []
    const traininglog50 = []

    data.training.map((session) => {
      if (session.wordCount === 10) {
        traininglog10.push(session)
      }
      return null
    })

    data.training.map((session) => {
      if (session.wordCount === 25) {
        traininglog25.push(session)
      }
      return null
    })

    data.training.map((session) => {
      if (session.wordCount === 50) {
        traininglog50.push(session)
      }
      return null
    })

    setTrainingState(produce(trainingState, (draft) => {
      draft.training10 = traininglog10
      draft.training25 = traininglog25
      draft.training50 = traininglog50
    }))
  }

  const setTrialsLog = async (data) => {
    // console.log('trialslog data:', data.trials)

    const trialslog10 = []
    const trialslog25 = []
    const trialslog50 = []

    data.trials.map((session) => {
      if (session.wordCount === 10) {
        trialslog10.push(session)
      }
      return null
    })

    data.trials.map((session) => {
      if (session.wordCount === 25) {
        trialslog25.push(session)
      }
      return null
    })

    data.trials.map((session) => {
      if (session.wordCount === 50) {
        trialslog50.push(session)
      }
      return null
    })

    setTrialsState(produce(trialsState, (draft) => {
      draft.trials10 = trialslog10
      draft.trials25 = trialslog25
      draft.trials50 = trialslog50
    }))
  }

  const setStatView = async (data) => {
    setStatState(produce(statState, (draft) => {
      draft.viewGraph = data
    }))
  }

  const setViewWordCount = async (data) => {
    setStatState(produce(statState, (draft) => {
      draft.viewWordCount = data
    }))
  }

  const contextData = {
    user: userState,
    lvl: levelState,
    health: hpState,
    exp: expState,
    trainingPts: trainingPtsState,
    customize: customState,
    color10: color10State,
    color25: color25State,
    color50: color50State,
    levelUpRate: rateState,
    nextRewardsTraining: nextTrainingRewardState,
    nextRewards10: next10RewardState,
    nextRewards25: next25RewardState,
    nextRewards50: next50RewardState,
    borderChosen: borderSelectState,
    colorChosen: colorSelectState,
    trainingLog: trainingState,
    trialsLog: trialsState,
    statView: statState,
    setUser,
    setLevel,
    setExp,
    setTrainingPts,
    setCustom,
    setColor10,
    setColor25,
    setColor50,
    setNextTrainingReward,
    setNext10Reward,
    setNext25Reward,
    setNext50Reward,
    foundColor10,
    foundColor25,
    foundColor50,
    setBorderSelected,
    setColorSelected,
    setTrainingLog,
    setTrialsLog,
    setStatView,
    setViewWordCount
  }

  return <userContext.Provider value={contextData}>{children}</userContext.Provider>
}

export function useUser() {
  return useContext(userContext)
}
