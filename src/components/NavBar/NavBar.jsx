import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import CartWidget from './CartWidget';

export default function MyNavbar () {
  return (
    <Navbar bg="light align-items-center" expand="lg">
      <Navbar.Brand as={Link} to="/" style={{marginLeft: '1rem'}}>Spurs Shop</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to={`/category/kits`}>Kits</Nav.Link>
          <Nav.Link as={Link} to={`/category/nike`}>Nike</Nav.Link>
          <Nav.Link as={Link} to={`/category/retro`}>Retro</Nav.Link>
          <Nav.Link as={Link} to="/cart"><FaShoppingCart /> <CartWidget /></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
