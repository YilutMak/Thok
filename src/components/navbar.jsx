import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
// import Login from '@/components/login-btn'
import { useSession, signIn, signOut } from 'next-auth/react'

function LayoutsNavbar() {
  // console.log(currentUser)
  const { data: session } = useSession()

  // console.log(session)

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Thok</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {
              session ? (
                <>
                  <Nav.Link href="/user">Dashboard</Nav.Link>
                  <Nav.Link href="/training">Training</Nav.Link>
                  <Nav.Link href="/trials">Trials</Nav.Link>
                  <Nav.Link onClick={() => signOut({ callbackUrl: '/' })}>Sign Out</Nav.Link>
                </>
              ) : (
                <Nav.Link onClick={() => signIn()}>Sign In</Nav.Link>
              )
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default LayoutsNavbar
