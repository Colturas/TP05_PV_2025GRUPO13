import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Layout from "./Layout";
import Inicio from "./Inicio";
import ListaAlumnos from "./ListaAlumnos";
import NuevoAlumno from "./NuevoAlumno";
import EditarAlumno from "./EditarAlumno";
import AcercaDe from "./AcercaDe";
import DetalleAlumno from "./DetalleAlumno";

function App() {
  const [alumnos, setAlumnos] = useState([]);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Inicio />} />
          <Route
            path="alumnos"
            element={<ListaAlumnos alumnos={alumnos} setAlumnos={setAlumnos} />}
          />
          <Route
            path="alumnos/nuevo"
            element={<NuevoAlumno setAlumnos={setAlumnos} />}
          />
          <Route
            path="alumnos/:id"
            element={<DetalleAlumno alumnos={alumnos} />}
          />
          <Route
            path="alumnos/:id/editar"
            element={<EditarAlumno alumnos={alumnos} setAlumnos={setAlumnos} />}
          />
          <Route path="acerca" element={<AcercaDe />} />
        </Route>
      </Routes>
    </Router>
  );
}
export default App;
