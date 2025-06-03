import { Link, useNavigate } from "react-router-dom";

function ListaAlumnos({ alumnos, onDelete }) {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "20px" }}>
      <h2>Lista de Alumnos</h2>
      <button onClick={() => navigate("/papelera")} style={{ marginBottom: "10px" }}>
        🗑️
      </button>
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
              <tr key={alumno.id}>
                <td>{alumno.lu}</td>
                <td>{alumno.nombre}</td>
                <td>{alumno.apellido}</td>
                <td>{alumno.curso}</td>
                <td>
                  <Link to={`/alumnos/${alumno.id}`}>
                    <button>Ver</button>
                  </Link>{" "}
                  <button onClick={() => navigate(`/alumnos/${alumno.id}/editar`)}>
                    Editar
                  </button>{" "}
                  <button onClick={() => onDelete(alumno.id)}>
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

