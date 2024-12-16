import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'
import CardWidget from './CartWidget';
import { NavLink } from 'react-router-dom';


function NavBarApp() {
  return (
    <>
      <Navbar className="styleNavBar"  data-bs-theme="black">
      <Container className="d-flex fs-3 fw-li justify-content-between">
          <NavLink to='/'>
          <img className="logoNavBar" src="/logoMovix.svg" alt="logoMovix"  />
          </NavLink>
          <Nav className="ml-auto" >
          <Nav.Link to='/' as={NavLink} >Inicio</Nav.Link>
          <NavDropdown title="Telefonos" id="basic-nav-dropdown">
              <NavDropdown.Item to='/product/Apple' as={NavLink}>Apple</NavDropdown.Item>
              <NavDropdown.Item to='/product/Samsung' as={NavLink}>Samsung</NavDropdown.Item>
              <NavDropdown.Item to='/product/Xiaomi' as={NavLink}>Xiaomi</NavDropdown.Item>
                            
              <NavDropdown.Divider />
              <NavDropdown.Item to='/product/Reacondicionado' as={NavLink}>Reacondicionados</NavDropdown.Item>
          </NavDropdown>
          
          <Nav.Link to='/vende-tu-tech' as={NavLink}>Vende tu tech!</Nav.Link>
          <Nav.Link to='/product/Ofertas' as={NavLink} className="text-danger">Ofertas</Nav.Link>
          
          
          </Nav>
          <NavLink to={'/cart'}>
            <CardWidget/>
          </NavLink>
        </Container>
      </Navbar>
      
    </>
  );
}

export default NavBarApp;