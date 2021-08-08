import React from 'react'
import { Button, Container, Form, FormControl, Navbar } from 'react-bootstrap'
const Header = () => {
  return (
    <header>
      <Navbar bg='dark' expand='lg'>
        <Container>
          <Navbar.Brand href='/'>FoodShop</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Button>Cart</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
