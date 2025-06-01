import { Link, useNavigate } from "react-router-dom";
function ListaAlumnos({ alumnos, setAlumnos }) {
  const navigate = useNavigate();
  const eliminarAlumno = (lu) => {
    const confirmar = confirm("ELIMINAR ESTE ALUMNO?");
    if (confirmar) {
      const nuevosAlumnos = alumnos.filter((a) => a.lu !== lu);
      setAlumnos(nuevosAlumnos);
    }
  }; //no toquen esto porfavor 
  return (
    <div style={{ padding: "20px" }}>
      <h2>Lista de Alumnos</h2>
      {alumnos.length === 0 ? (
        <p>No hay alumnos cargados.</p>
      ) : (
        <table border="1" cellPadding="10" cellSpacing="0">
          <thead>
            <tr>
              <th>LU</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Curso</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {alumnos.map((alumno) => (
              <tr key={alumno.lu}>
                <td>{alumno.lu}</td>
                <td>{alumno.nombre}</td>
                <td>{alumno.apellido}</td>
                <td>{alumno.curso}</td>
                <td>
                  <Link to={`/alumnos/${alumno.lu}`}>
                    <button>Ver</button>
                  </Link>{" "}
                  <button
                    onClick={() => navigate(`/alumnos/${alumno.lu}/editar`)}
                  >
                    Editar
                  </button>{" "}
                  <button onClick={() => eliminarAlumno(alumno.lu)}>
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
export default ListaAlumnos;
