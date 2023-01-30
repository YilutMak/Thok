import Head from 'next/head'
import { useRouter } from 'next/router'
import { useGenPhrase } from '@/contexts/genPhrase'
import { useUser } from '@/contexts/user'

export default function SWRIndex() {
  const { push } = useRouter()

  const {
    // customize:
    // {
    // outline,
    // fill
    // },
    color10: {
      color10
    },
    color25: {
      color25
    },
    color50: {
      color50
    }
  } = useUser()

  const {
    setWordCount
  } = useGenPhrase()

  const {
    // newPhrase,
    setPhraseNumber,
    setPhrasePunctuation
  } = useGenPhrase()

  const trials10 = () => {
    setPhraseNumber(true)
    setPhrasePunctuation(true)
    setWordCount(10)
    // newPhrase(10, false, false)
    push('/trials/trial10')
  }

  const trials25 = () => {
    setPhraseNumber(true)
    setPhrasePunctuation(true)
    setWordCount(25)
    // newPhrase(25, false, false)
    push('/trials/trial25')
  }

  const trials50 = () => {
    setPhraseNumber(true)
    setPhrasePunctuation(true)
    setWordCount(50)
    // newPhrase(50, false, false)
    push('/trials/trial50')
  }

  const checkColor = (color) => {
    if (color === 11) {
      if (color10 < 11) {
        return 'white 6px solid'
      }
    }

    if (color === 12) {
      if (color10 < 12) {
        return 'white 6px solid'
      }
    }

    if (color === 13) {
      if (color10 < 13) {
        return 'white 6px solid'
      }
    }

    if (color === 14) {
      if (color10 < 14) {
        return 'white 6px solid'
      }
    }

    if (color === 15) {
      if (color10 < 15) {
        return 'white 6px solid'
      }
    }

    if (color === 16) {
      if (color25 < 16) {
        return 'white 6px solid'
      }
    }

    if (color === 17) {
      if (color25 < 17) {
        return 'white 6px solid'
      }
    }

    if (color === 18) {
      if (color25 < 18) {
        return 'white 6px solid'
      }
    }

    if (color === 19) {
      if (color25 < 19) {
        return 'white 6px solid'
      }
    }

    if (color === 20) {
      if (color25 < 20) {
        return 'white 6px solid'
      }
    }

    if (color === 21) {
      if (color50 < 21) {
        return 'white 6px solid'
      }
    }

    if (color === 22) {
      if (color50 < 22) {
        return 'white 6px solid'
      }
    }

    if (color === 23) {
      if (color50 < 23) {
        return 'white 6px solid'
      }
    }

    if (color === 24) {
      if (color50 < 24) {
        return 'white 6px solid'
      }
    }

    if (color === 25) {
      if (color50 < 25) {
        return 'white 6px solid'
      }
    }
    return null
  }

  return (
    <div>
      <Head>
        <title>Trials main</title>
      </Head>
      <div className="d-flex row mb-3 mx-auto text-center" style={{ width: '100%', marginTop: '20px' }}>
        <h1 style={{ color: '#787777' }}>Trials</h1>
      </div>

      <div id="trial10box" type="button" className="col d-flex align-items-center justify-content-center" style={{ height: '280px', minWidth: '1000px', backgroundColor: '#ff7365', marginTop: '0px', marginRight: '30px', marginLeft: '30px', borderRadius: '40px' }} onClick={() => trials10()}>
        <div style={{ }}>
          <div className="d-flex align-items-center">
            <div className="row" style={{ width: '100%' }}>
              <div className="col">
                <h1 style={{ width: '300px', marginTop: '65px', marginLeft: '50px', marginRight: '60px', color: 'white' }}>
                  10 words Trials
                </h1>
              </div>

              <div className="col">
                <div id="trials10" style={{ height: '200px', width: '300px' }} />
              </div>

              <div className="col" style={{ width: '300px' }}>
                <div className="" style={{ marginLeft: '130px', marginTop: '70px' }}>
                  <div className="row" style={{ color: 'white' }}> Trial Rewards:</div>
                  <div className="row">
                    <div className=" p-0 m-1" style={{ height: '20px', width: '20px', backgroundColor: '#fef445', borderRadius: '10px', border: checkColor(11) }} />
                    <div className=" p-0 m-1" style={{ height: '20px', width: '20px', backgroundColor: '#f24726', borderRadius: '10px', border: checkColor(12) }} />
                    <div className=" p-0 m-1" style={{ height: '20px', width: '20px', backgroundColor: '#12cdd4', borderRadius: '10px', border: checkColor(13) }} />
                    <div className=" p-0 m-1" style={{ height: '20px', width: '20px', backgroundColor: '#fac710', borderRadius: '10px', border: checkColor(14) }} />
                    <div className=" p-0 m-1" style={{ height: '20px', width: '20px', backgroundColor: '#cee741', borderRadius: '10px', border: checkColor(15) }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="trial25box" type="button" className="col d-flex align-items-center justify-content-center" style={{ height: '280px', minWidth: '1000px', backgroundColor: '#ffdf65', marginTop: '20px', marginRight: '30px', marginLeft: '30px', borderRadius: '40px' }} onClick={() => trials25()}>
        <div style={{ }}>
          <div className="d-flex align-items-center">
            <div className="row" style={{ width: '100%' }}>
              <div className="col">
                <h1 style={{ width: '300px', marginTop: '65px', marginLeft: '50px', marginRight: '60px', color: 'white' }}>
                  25 words Trials
                </h1>
              </div>

              <div className="col">
                <div id="trials25" style={{ height: '200px', width: '300px' }} />
              </div>

              <div className="col" style={{ width: '300px' }}>
                <div className="" style={{ marginLeft: '130px', marginTop: '70px' }}>
                  <div className="row" style={{ color: 'white' }}> Trial Rewards:</div>
                  <div className="row">
                    <div className=" p-0 m-1" style={{ height: '20px', width: '20px', backgroundColor: '#da0063', borderRadius: '10px', border: checkColor(16) }} />
                    <div className=" p-0 m-1" style={{ height: '20px', width: '20px', backgroundColor: '#652cb3', borderRadius: '10px', border: checkColor(17) }} />
                    <div className=" p-0 m-1" style={{ height: '20px', width: '20px', backgroundColor: '#8fd14f', borderRadius: '10px', border: checkColor(18) }} />
                    <div className=" p-0 m-1" style={{ height: '20px', width: '20px', backgroundColor: '#1084fa', borderRadius: '10px', border: checkColor(19) }} />
                    <div className=" p-0 m-1" style={{ height: '20px', width: '20px', backgroundColor: '#ff4a4a', borderRadius: '10px', border: checkColor(20) }} />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div id="trial50box" type="button" className="col d-flex align-items-center justify-content-center" style={{ height: '280px', minWidth: '1000px', backgroundColor: '#ff65f6', marginTop: '20px', marginRight: '30px', marginLeft: '30px', borderRadius: '40px' }} onClick={() => trials50()}>
        <div style={{ }}>
          <div className="d-flex align-items-center">
            <div className="row" style={{ width: '100%' }}>
              <div className="col">
                <h1 style={{ width: '300px', marginTop: '65px', marginLeft: '50px', marginRight: '60px', color: 'white' }}>
                  50 words Trials
                </h1>
              </div>

              <div className="col">
                <div id="trials50" style={{ height: '200px', width: '300px' }} />
              </div>

              <div className="col" style={{ width: '300px' }}>
                <div className="" style={{ marginLeft: '130px', marginTop: '70px' }}>
                  <div className="row" style={{ color: 'white' }}> Trial Rewards:</div>
                  <div className="row">
                    <div className=" p-0 m-1" style={{ height: '20px', width: '20px', backgroundColor: '#8e89cc', borderRadius: '10px', border: checkColor(21) }} />
                    <div className=" p-0 m-1" style={{ height: '20px', width: '20px', backgroundColor: '#7ceeab', borderRadius: '10px', border: checkColor(22) }} />
                    <div className=" p-0 m-1" style={{ height: '20px', width: '20px', backgroundColor: '#a3a3a3ff', borderRadius: '10px', border: checkColor(23) }} />
                    <div className=" p-0 m-1" style={{ height: '20px', width: '20px', backgroundColor: '#edb6da', borderRadius: '10px', border: checkColor(24) }} />
                    <div className=" p-0 m-1" style={{ height: '20px', width: '20px', backgroundColor: '#383838', borderRadius: '10px', border: checkColor(25) }} />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
