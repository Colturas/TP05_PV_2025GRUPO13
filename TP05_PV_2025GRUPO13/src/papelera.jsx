import { useNavigate } from "react-router-dom";

function Papelera({ alumnosEnPapelera, onRestore }) {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "20px" }}>
      <h2>Papelera</h2>

      {alumnosEnPapelera.length === 0 ? (
        <p>No hay alumnos en la papelera.</p>
      ) : (
        <table border="1" cellPadding="8" cellSpacing="0" style={{ width: "100%", marginTop: "10px" }}>
          <thead style={{ backgroundColor: "#222", color: "#fff" }}>
            <tr>
              <th>LU</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Curso</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {alumnosEnPapelera.map(({ alumno, index }) => (
              <tr key={alumno.id}>
                <td>{alumno.lu}</td>
                <td>{alumno.nombre}</td>
                <td>{alumno.apellido}</td>
                <td>{alumno.curso}</td>
                <td>
                  <button
                    onClick={() => onRestore(alumno.id)}
                    style={{ marginRight: "8px" }}
                  >
                    Restaurar
                  </button>
                  <button onClick={() => navigate(`/alumnos/${alumno.id}`)}>
                    Ver
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

export default Papelera;
