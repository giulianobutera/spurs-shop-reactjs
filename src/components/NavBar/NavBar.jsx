import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

export default function MyNavbar ({cartItems}) {
  return (
    <Navbar bg="light align-items-center" expand="lg">
      <Navbar.Brand as={Link} to="/">Spurs Shop</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/kits">Kits</Nav.Link>
          <Nav.Link as={Link} to="/nike">Nike</Nav.Link>
        </Nav>
        <Nav> 
          <Nav.Link as={Link} to="/cart"> 
            <FaShoppingCart /> {cartItems} 
          </Nav.Link> 
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
