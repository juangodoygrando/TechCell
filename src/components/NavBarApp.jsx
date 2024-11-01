import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'
import CardWidget from './CartWidget';
import logoNavBar from '../../public/logoNavBar.png'


function NavBarApp() {
  return (
    <>
      <Navbar className="styleNavBar"  data-bs-theme="dark">
      <Container className="d-flex justify-content-between">
          
          <img src="/logoNavBar.png" alt=""  />
          <Nav className="ml-auto" >
          <Nav.Link href="#home">Inicio</Nav.Link>
          <NavDropdown title="Telefonos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Apple</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Samsung</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Xiaomi</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Oppo</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Huawei</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Motorola</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Añade tus accesorios</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Portátiles" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Apple</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Samsung</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">HP</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Lenovo</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Microsoft</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Añade tus accesorios</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#home">Vende tu tech!</Nav.Link>
          <Nav.Link href="#home" className="text-warning">Ofertas</Nav.Link>
          
          
          </Nav>
          <CardWidget harcodeado='2'/>
        </Container>
      </Navbar>
      
    </>
  );
}

export default NavBarApp;