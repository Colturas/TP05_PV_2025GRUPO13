import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NuevoAlumno({ alumnos, setAlumnos }) {
  const navigate = useNavigate();
  const [nuevoAlumno, setNuevoAlumno] = useState({
    lu: "",
    nombre: "",
    apellido: "",
    curso: "",
    email: "",
    domicilio: "",
    telefono: "",
    activo: true
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNuevoAlumno({ ...nuevoAlumno, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const numero = parseInt(nuevoAlumno.lu, 10);
    if (isNaN(numero)) {
      alert("LU debe ser un número");
      return;
    }

    const formatoLU = `APU${numero.toString().padStart(5, "0")}`;

    const alumnoFormateado = { ...nuevoAlumno, lu: formatoLU };

    const yaExiste = alumnos.some((a) => a.lu === formatoLU);
    if (yaExiste) {
      alert("Ese LU ya está en uso");
      return;
    }

    setAlumnos([...alumnos, alumnoFormateado]);
    navigate("/lista");
  };

  return (
    <div>
      <h2>Nuevo Alumno</h2>
      <form onSubmit={handleSubmit} className="formulario">
        <label>LU:</label>
        <input
          type="number"
          name="lu"
          value={nuevoAlumno.lu}
          onChange={handleChange}
          required
        />
        <label>Nombre:</label>
        <input
          type="text"
          name="nombre"
          value={nuevoAlumno.nombre}
          onChange={handleChange}
          required
        />
        <label>Apellido:</label>
        <input
          type="text"
          name="apellido"
          value={nuevoAlumno.apellido}
          onChange={handleChange}
          required
        />
        <label>Curso:</label>
        <input
          type="text"
          name="curso"
          value={nuevoAlumno.curso}
          onChange={handleChange}
          required
        />
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={nuevoAlumno.email}
          onChange={handleChange}
        />
        <label>Domicilio:</label>
        <input
          type="text"
          name="domicilio"
          value={nuevoAlumno.domicilio}
          onChange={handleChange}
        />
        <label>Teléfono:</label>
        <input
          type="text"
          name="telefono"
          value={nuevoAlumno.telefono}
          onChange={handleChange}
        />
        <button type="submit">Agregar Alumno</button>
      </form>
    </div>
  );
}
