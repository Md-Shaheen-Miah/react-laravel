import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import '../../admin/css/Navbar.css';
import { NavLink } from 'react-router-dom';
const Navbarr = () => {
  return (
    
    <Navbar className="bg-body-tertiary">
    <Container>
      <NavLink className='logo'to="/Dashboard" >SHEBA</NavLink>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text className='sign'>
          Signed in as: <NavLink className='sign' to="/Admin" >Admin</NavLink>
        </Navbar.Text>
      </Navbar.Collapse>
    </Container>
  </Navbar>
      
  )
}

export default Navbarr
