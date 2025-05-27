import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className="bg-blue-600 p-4 text-white flex gap-4">
      <Link to="/">Inicio</Link>
      <Link to="/alumnos">Lista de Alumnos</Link>
      <Link to="/alumnos/nuevo">Nuevo Alumno</Link>
      <Link to="/acerca">Acerca de</Link>
    </nav>
  );
}
