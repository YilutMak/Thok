import React, { useEffect } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
// import Login from '@/components/login-btn'
import useExp from '@/hooks/exp'
import useCustom from '@/hooks/custom'
import useColor10 from '@/hooks/color10'
import useTrainingPTs from '@/hooks/trainingPTs'
import { useSession, signIn, signOut } from 'next-auth/react'
import { useUser } from '@/contexts/user'
import SmallExpBar from '@/components/smallExpBar'
import useColor50 from '@/hooks/color50'
import useColor25 from '@/hooks/color25'

function LayoutsNavbar() {
  // console.log(currentUser)
  const { data: session } = useSession()

  const {
    getMyExp
  } = useExp()

  const {
    getMyCustom
  } = useCustom()

  const {
    getMyColor10
  } = useColor10()

  const {
    getMyColor25
  } = useColor25()

  const {
    getMyColor50
  } = useColor50()

  const {
    getMytrainingPts
  } = useTrainingPTs()

  const {
    user: {
      username
      // userId
    },
    lvl: {
      level
    },
    exp: {
      exp
    },
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
    setUser,
    setLevel
  } = useUser()

  useEffect(() => {
    if (session) {
      // console.log(session.user)
      const { id } = session.user
      setUser(session.user)
      getMyExp(id)
      getMyColor10(id)
      getMyColor25(id)
      getMyColor50(id)
      getMyCustom(id)
      getMytrainingPts(id)
    }
  }, [session])

  useEffect(() => {
    setLevel(exp)
  }, [exp])

  useEffect(() => {
    // console.log('username:', username, 'userId:', userId, 'exp:', exp, 'level:', level, 'trainingPoints:', trainingPoints, 'outline:', outline, 'fill:', fill, 'color10:', color10, 'color25:', color25, 'color50:', color50)
  }, [exp, trainingPoints, outline, fill, color10, color25, color50])

  return (
    <Navbar expand="lg" style={{ background: '#85beca' }}>
      <Container>
        <Navbar.Brand id="navButton" href="/" style={{ color: 'white' }}>Thok</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" style={{ width: '100%' }}>
          <Nav className="">
            {
              session ? (
                <div className="d-flex align-items-center">

                  <div className="d-flex">
                    <Nav.Link id="navButton" href="/user" style={{ color: 'white' }}>Dashboard</Nav.Link>
                    <Nav.Link id="navButton" href="/training" style={{ color: 'white' }}>Training</Nav.Link>
                    <Nav.Link id="navButton" href="/trials" style={{ color: 'white' }}>Trials</Nav.Link>
                  </div>
                  <div style={{ width: '700px', height: '40px' }} />
                  <div className="d-flex justify-content-end align-items-center">
                    <div className="">
                      <div
                        id="navAvatar"
                        style={{
                          width: '40px',
                          height: '40px',
                          background: `${fill}`,
                          borderRadius: '50%',
                          border: `solid ${outline} 4px`,
                          marginRight: '10px' }}
                      />
                    </div>
                    <div style={{ width: '100%', marginRight: '10px' }}>
                      <div style={{ fontSize: '15px', color: 'white' }}>{username}</div>
                      <div style={{ fontSize: '10px', color: 'white' }}>lv {level}</div>
                      <div style={{ fontSize: '10px', color: 'white' }}><SmallExpBar /></div>
                    </div>

                    <Nav.Link id="navButton" onClick={() => signOut({ callbackUrl: '/' })} style={{ color: 'white' }}>Logout</Nav.Link>

                  </div>
                </div>

              ) : (
                <Nav.Link id="navButton" onClick={() => signIn()} style={{ color: 'white' }}>Login</Nav.Link>
              )
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default LayoutsNavbar
