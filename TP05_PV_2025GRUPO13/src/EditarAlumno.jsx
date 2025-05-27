import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditarAlumno({ alumnos, setAlumnos }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const alumnoOriginal = alumnos.find((a) => a.id === parseInt(id));

  const [formData, setFormData] = useState({
    lu: "",
    nombre: "",
    apellido: "",
    curso: "",
    email: "",
    domicilio: "",
    telefono: ""
  });

  useEffect(() => {
    if (alumnoOriginal) {
      setFormData({
        lu: alumnoOriginal.lu,
        nombre: alumnoOriginal.nombre,
        apellido: alumnoOriginal.apellido,
        curso: alumnoOriginal.curso,
        email: alumnoOriginal.email,
        domicilio: alumnoOriginal.domicilio,
        telefono: alumnoOriginal.telefono
      });
    }
  }, [alumnoOriginal]);

  if (!alumnoOriginal) {
    return <p>Alumno no encontrado.</p>;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const alumnoEditado = { ...alumnoOriginal, ...formData };
    const nuevosAlumnos = alumnos.map((a) =>
      a.id === alumnoEditado.id ? alumnoEditado : a
    );
    setAlumnos(nuevosAlumnos);
    navigate("/alumnos");
  };

  return (
    <div>
      <h2>Editar Alumno</h2>
      <form onSubmit={handleSubmit}>
        <input name="lu" value={formData.lu} onChange={handleChange} required />
        <input name="nombre" value={formData.nombre} onChange={handleChange} required />
        <input name="apellido" value={formData.apellido} onChange={handleChange} required />
        <input name="curso" value={formData.curso} onChange={handleChange} required />
        <input name="email" value={formData.email} onChange={handleChange} required />
        <input name="domicilio" value={formData.domicilio} onChange={handleChange} required />
        <input name="telefono" value={formData.telefono} onChange={handleChange} required />
        <button type="submit">Guardar cambios</button>
      </form>
    </div>
  );
}

export default EditarAlumno;