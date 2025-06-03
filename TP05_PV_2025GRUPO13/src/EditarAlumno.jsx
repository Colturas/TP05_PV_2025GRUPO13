import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditarAlumno({ alumnos, setAlumnos }) {
  const { id } = useParams();
  const alumnoId = parseInt(id, 10);
  const navigate = useNavigate();

  const alumnoOriginal = alumnos.find((a) => a.id === alumnoId);

  const [formData, setFormData] = useState({
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
        nombre: alumnoOriginal.nombre,
        apellido: alumnoOriginal.apellido,
        curso: alumnoOriginal.curso,
        email: alumnoOriginal.email,
        domicilio: alumnoOriginal.domicilio,
        telefono: alumnoOriginal.telefono,
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
    const alumnoEditado = {
      ...alumnoOriginal,
      ...formData
    };
    setAlumnos((prev) =>
      prev.map((a) => (a.id === alumnoEditado.id ? alumnoEditado : a))
    );
    navigate("/alumnos");
  };

  return (


  
    <div style={{ padding: "20px" }}>
      <h2>Editar Alumno</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Apellido:</label>
          <input
            name="apellido"
            value={formData.apellido}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Curso:</label>
          <input
            name="curso"
            value={formData.curso}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Domicilio:</label>
          <input
            name="domicilio"
            value={formData.domicilio}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Teléfono:</label>
          <input
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Guardar cambios</button>
      </form>
    </div>
  );
}

export default EditarAlumno;

