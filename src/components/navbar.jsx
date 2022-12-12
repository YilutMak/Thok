import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

function LayoutsNavbar() {
  // console.log(currentUser)

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Thok</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/training">Training</Nav.Link>
            <Nav.Link href="/trials">Trials</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default LayoutsNavbar
