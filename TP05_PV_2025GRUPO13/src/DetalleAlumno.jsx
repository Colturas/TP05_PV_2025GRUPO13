import { useParams, useNavigate } from "react-router-dom";
function DetalleAlumno({ alumnos }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const alumno = alumnos.find((a) => a.lu === id);
  if (!alumno) {
    return (
      <div style={{ padding: "20px" }}>
        <h2>No fue encontrado el alumno</h2>
        <button onClick={() => navigate("/alumnos")}>Volver a la lista</button>
      </div>
    );
  }
  return (
    <div style={{ padding: "20px" }}>
      <h2>Detalles del Alumno</h2>
      <p><strong>LU:</strong> {alumno.lu}</p>
      <p><strong>Nombre:</strong> {alumno.nombre}</p>
      <p><strong>Apellido:</strong> {alumno.apellido}</p>
      <p><strong>Curso:</strong> {alumno.curso}</p>
      <p><strong>Email:</strong> {alumno.email}</p>
      <p><strong>Domicilio:</strong> {alumno.domicilio}</p>
      <p><strong>Teléfono:</strong> {alumno.telefono}</p>
      <button onClick={() => navigate("/alumnos")}>Volver a la lista</button>
    </div>
  );
}
export default DetalleAlumno;