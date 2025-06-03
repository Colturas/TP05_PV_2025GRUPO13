import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav style={{ marginBottom: "1rem" }}>
      <Link to="/">Inicio</Link> |{" "}
      <Link to="/alumnos">Lista de Alumnos</Link> |{" "}
      <Link to="/alumnos/nuevo">Nuevo Alumno</Link> |{" "}
      <Link to="/acerca">Acerca de</Link>
    </nav>
  );
}

export default NavBar;