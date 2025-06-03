import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  return (
    <Navbar bg="light" variant="light" expand="lg">

      <Container>
        <Navbar.Brand as={Link} to="/">
          Gestión de Alumnos
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">
            Inicio
          </Nav.Link>
          <Nav.Link as={Link} to="/alumnos">
            Lista de Alumnos
          </Nav.Link>
          <Nav.Link as={Link} to="/alumnos/nuevo">
            Nuevo Alumno
          </Nav.Link>
          <Nav.Link as={Link} to="/acerca">
            Acerca de
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;