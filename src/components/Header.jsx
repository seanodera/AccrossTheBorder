import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
const Header = () => {
  return (
    <header>
      <Navbar bg='dark' expand='lg'>
        <Container className='text-center'>
          <Navbar.Brand
            href='/'
            className='text-center'
            style={{ color: '#FF1744' }}
          >
            AccrossTheBorder
          </Navbar.Brand>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
