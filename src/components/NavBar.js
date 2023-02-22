import { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const onUpdateActiveLink = (e) => {
    e.preventDefault();
    setActiveLink(e.target.name);
  };
  return (
    <Navbar expand='lg' className='app-Nav'>
      <Container fluid className='nav-container'>
        <Navbar.Brand>
          <h3>LOGO HERE</h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav'>
          <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link
              href='home'
              name='home'
              className={
                activeLink === 'home' ? 'active navbar-link' : 'navbar-link'
              }
              onClick={(e) => onUpdateActiveLink(e)}
            >
              home
            </Nav.Link>
            <Nav.Link
              href='about'
              name='about'
              className={
                activeLink === 'about' ? 'active navbar-link' : 'navbar-link'
              }
              onClick={(e) => onUpdateActiveLink(e)}
            >
              about
            </Nav.Link>
            <Nav.Link
              href='product'
              name='product'
              className={
                activeLink === 'product' ? 'active navbar-link' : 'navbar-link'
              }
              onClick={(e) => onUpdateActiveLink(e)}
            >
              product
            </Nav.Link>
            <Nav.Link
              href='pricing'
              name='pricing'
              className={
                activeLink === 'pricing' ? 'active navbar-link' : 'navbar-link'
              }
              onClick={(e) => onUpdateActiveLink(e)}
            >
              pricing
            </Nav.Link>
            <Nav.Link
              href='custormer-stories'
              name='custormer-stories'
              className={
                activeLink === 'custormer-stories'
                  ? 'active navbar-link'
                  : 'navbar-link'
              }
              onClick={(e) => onUpdateActiveLink(e)}
            >
              custormer stories
            </Nav.Link>
            <Nav.Link
              href='contact'
              name='contact'
              className={
                activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'
              }
              onClick={(e) => onUpdateActiveLink(e)}
            >
              contact
            </Nav.Link>
          </Nav>
          <span className='navbar-text m-sm-auto'>
            <button className='login-btn'>
              <span className='btn-text'>login</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
