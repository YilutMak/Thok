import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts'
import { useCheckTyped } from '@/contexts/checkTyped'
import { useUser } from '@/contexts/user'
import LostAvatar from '@/components/lostAvatar'
import MidExpBar from '@/components/midExpBar'
import moment from 'moment'
// import { useRouter } from 'next/router'
// import { useGenPhrase } from '@/contexts/genPhrase'
import React, { useEffect } from 'react'
import Link from 'next/link'
// import { match } from 'react-router-dom'

export default function Training() {
  // const { push } = useRouter()

  const {
    lvl: {
      level
    }
  } = useUser()

  // const {
  //   genPhraseLength: { phraseLength, phraseNumber, phrasePunctuation },
  //   newPhrase
  // } = useGenPhrase()

  const {
    prevStats: {
      prevPhrase,
      haveNum,
      havePunc,
      prevWpm,
      prevTime,
      prevErrors,
      prevChars,
      prevAcc,
      prevTimestamps
    },
    updateLost
    // initializeCheckType
  } = useCheckTyped()

  // if (!lostAllHp) {
  //   return (
  //     <div className="d-flex row mb-3 mx-auto text-center" style={{ width: '100%' }}>
  //       <h1>You do not belong here!</h1>
  //     </div>
  //
  //   )
  // }

  // const data = [{ name: 'Page A', uv: 400 }, { name: 'Page B', uv: 500 }, { name: 'Page B', uv: 200 }, { name: 'Page B', uv: 100 }]

  const genData = () => {
    const data = []
    prevTimestamps.map((time, i) => {
      data.push({ name: `${i - 1}`, wpm: `${Math.round((i / ((prevTimestamps[i + 1] - prevTimestamps[0]) / 1000)) * 60)}` })
      return null
    })
    data.splice(0, 1)
    data.splice(data.length - 1, 1, { name: `${data.length - 1}`, wpm: `${prevWpm}` })
    // console.log('data:', data)
    return data
  }

  // const genYDomain = () => {
  const yDomain = []
  prevTimestamps.map((time, i) => {
    yDomain.push((i / ((prevTimestamps[i + 1] - prevTimestamps[0]) / 1000)) * 60)
    return null
  })
  yDomain.splice(0, 1)
  yDomain.splice(yDomain.length - 1, 1)
  // console.log('yDomain:', yDomain)
  // console.log('max yDomain:', Math.max(...yDomain))
  // return Math.max(...yDomain)
  // }

  useEffect(() => {
    updateLost(false)
  }, [])

  return (
    <div style={{ color: '#787777' }}>
      <div className="d-flex row mx-auto text-center" style={{ width: '100%', marginTop: '20px' }}>
        <h1>You lost all your HP!</h1>
      </div>

      <div className="row text-center mx-auto" style={{ width: '1000px', marginTop: '30px' }}>
        <h5>Phrase:</h5>
        <div>{`${prevPhrase || ' '}`}</div>
      </div>

      <div className=" d-flex mx-auto justify-content-center">
        <div style={{ marginTop: '40px', marginRight: '25px' }}>
          <LostAvatar />
          <div style={{ marginTop: '3px', marginLeft: '25px' }}>
            <div style={{ marginLeft: '55px', fontSize: '10px' }}>Level: {level}</div>
            <MidExpBar />
          </div>
        </div>

        <LineChart
          width={600}
          height={300}
          data={genData()}
          margin={{ top: 50, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="wpm" stroke="#85beca" />
        </LineChart>

        <div className="" style={{ marginLeft: '25px', marginTop: '50px' }}>
          <h6>{`WPM: ${prevWpm || 0}`}</h6>
          <h6>{`ACC: ${prevAcc * 100 || 0}%`}</h6>
          <h6>{`time: ${prevTime ? moment(prevTime).format('ss:SS') : '00:00'}s`}</h6>
          <h6>{`chars: ${prevChars || 0}`}</h6>
          <h6>{`num: ${haveNum || false}`}</h6>
          <h6>{`punc: ${havePunc || false}`}</h6>
          <h6>{`errors: ${prevErrors?.join(',') || 0}`}</h6>
        </div>
      </div>

      <div className="row text-center mx-auto" style={{ width: '420px', marginTop: '20px' }}>
        <button id="lostButton" type="button" style={{ height: '30px', width: '200px', marginTop: '10px', border: 'none', borderRadius: '15px', background: '#88bdcb' }}> <Link href="/training" style={{ textDecoration: 'none', color: 'white' }}>New training!</Link></button>

        <button id="lostButton" type="button" style={{ marginLeft: '20px', height: '30px', width: '200px', marginTop: '10px', border: 'none', borderRadius: '15px', background: '#88bdcb' }}><Link href="/trials" style={{ textDecoration: 'none', color: 'white' }}>Challege trials!</Link></button>
      </div>
    </div>
  )
}

// <Link href="/training" style={{ textDecoration: 'none', color: 'white' }}> </Link>
