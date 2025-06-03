import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Layout from "./Layout";
import Inicio from "./Inicio";
import ListaAlumnos from "./ListaAlumnos";
import NuevoAlumno from "./NuevoAlumno";
import EditarAlumno from "./EditarAlumno";
import DetalleAlumno from "./DetalleAlumno";
import AcercaDe from "./AcercaDe";
import Papelera from "./Papelera";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [alumnos, setAlumnos] = useState([]);
  const [papelera, setPapelera] = useState([]);

  const handleDelete = (alumnoId) => {
    const idx = alumnos.findIndex((a) => a.id === alumnoId);
    if (idx < 0) return;
    const alumnoToDelete = alumnos[idx];
    setPapelera((prevPapelera) => [
      ...prevPapelera,
      { alumno: alumnoToDelete, index: idx },
    ]);
    setAlumnos((prevAlumnos) =>
      prevAlumnos.filter((a) => a.id !== alumnoId)
    );
  };

  const handleRestore = (alumnoId) => {
    const entrante = papelera.find((e) => e.alumno.id === alumnoId);
    if (!entrante) return;
    setPapelera((prevPapelera) =>
      prevPapelera.filter((e) => e.alumno.id !== alumnoId)
    );
    setAlumnos((prevAlumnos) => {
      const nuevos = [...prevAlumnos];
      const posicion = Math.min(entrante.index, nuevos.length);
      nuevos.splice(posicion, 0, entrante.alumno);
      return nuevos;
    });
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Inicio />} />

          <Route
            path="alumnos"
            element={
              <ListaAlumnos
                alumnos={alumnos}
                onDelete={handleDelete}
              />
            }
          />

          <Route
            path="alumnos/nuevo"
            element={
              <NuevoAlumno
                alumnos={alumnos}
                papelera={papelera.map((e) => e.alumno)}
                setAlumnos={setAlumnos}
              />
            }
          />

          <Route
            path="alumnos/:id/editar"
            element={
              <EditarAlumno
                alumnos={alumnos}
                setAlumnos={setAlumnos}
              />
            }
          />

          <Route
            path="alumnos/:id"
            element={<DetalleAlumno alumnos={alumnos} />}
          />

          <Route
            path="papelera"
            element={
              <Papelera
                alumnosEnPapelera={papelera}
                onRestore={handleRestore}
              />
            }
          />

          <Route path="acerca" element={<AcercaDe />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;