import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NuevoAlumno({ alumnos, papelera, setAlumnos }) {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    curso: "",
    email: "",
    domicilio: "",
    telefono: ""
  });
  const navigate = useNavigate();

  const extraerIndice = (lu) => {
    return parseInt(lu.replace(/^APU0*/, ""), 10) || 0;
  };

  const calcularSiguienteLU = () => {
    const todasLUs = [
      ...alumnos.map((a) => a.lu),
      ...papelera.map((a) => a.lu),
    ];
    if (todasLUs.length === 0) {
      return "APU00001";
    }
    const indices = todasLUs.map((lu) => extraerIndice(lu));
    const maxIndice = Math.max(...indices);
    const siguiente = maxIndice + 1;
    return `APU${String(siguiente).padStart(5, "0")}`;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevaLU = calcularSiguienteLU();
    const nuevoAlumno = {
      id: Date.now(),
      lu: nuevaLU,
      nombre: formData.nombre,
      apellido: formData.apellido,
      curso: formData.curso,
      email: formData.email,
      domicilio: formData.domicilio,
      telefono: formData.telefono,
      activo: true,
    };
    setAlumnos((prev) => [...prev, nuevoAlumno]);
    navigate("/alumnos");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Agregar Nuevo Alumno</h2>
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
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}

export default NuevoAlumno;
