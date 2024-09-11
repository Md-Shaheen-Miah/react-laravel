import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import '../../admin/css/Navbar.css';
const Navbarr = () => {
  return (
    
    <Navbar className="bg-body-tertiary">
    <Container>
      <Navbar.Brand className='logo' href="#home">SHEBA</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text className='sign'>
          Signed in as: <a className='sign' href="#login">Shaheen</a>
        </Navbar.Text>
      </Navbar.Collapse>
    </Container>
  </Navbar>
      
  )
}

export default Navbarr
