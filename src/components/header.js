import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { UserContext } from '../context/user_context';
import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  const { currentUser } = React.useContext(UserContext);

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand to="/">Wine Celler</Navbar.Brand>
          <Nav className="me-auto">
            {currentUser && <NavLink className='nav-link' to="users">Users</NavLink> }
            {currentUser && <NavLink className='nav-link' to="wineries">Wineries</NavLink> }
            {currentUser && <NavLink className='nav-link' to="bottles">Bottles</NavLink> }
            {!currentUser && <NavLink className='nav-link' to="signup">Sign up</NavLink> }
            {!currentUser && <NavLink className='nav-link' to="login">Login</NavLink> }
            {currentUser && <NavLink className='nav-link' to="logout">Logout</NavLink> }
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
