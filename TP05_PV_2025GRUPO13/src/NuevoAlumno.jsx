import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NuevoAlumno({ setAlumnos }) {
  const [numeroLU, setNumeroLU] = useState("");
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    curso: "",
    email: "",
    domicilio: "",
    telefono: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "numeroLU") {
      setNumeroLU(value);
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevoAlumno = {
      id: Date.now(),
      lu: `APU${numeroLU.padStart(4, "0")}`,
      ...formData,
      activo: true
    };
    setAlumnos((prev) => [...prev, nuevoAlumno]);
    navigate("/alumnos");
  };

  return (
    <div>
      <h2>Agregar Nuevo Alumno</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="numeroLU"
          placeholder="Número de LU (ej: 5 para APU0005)"
          value={numeroLU}
          onChange={handleChange}
          required
        />
        <input name="nombre" placeholder="Nombre" onChange={handleChange} required />
        <input name="apellido" placeholder="Apellido" onChange={handleChange} required />
        <input name="curso" placeholder="Curso" onChange={handleChange} required />
        <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
        <input name="domicilio" placeholder="Domicilio" onChange={handleChange} required />
        <input name="telefono" placeholder="Teléfono" onChange={handleChange} required />
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}

export default NuevoAlumno;
