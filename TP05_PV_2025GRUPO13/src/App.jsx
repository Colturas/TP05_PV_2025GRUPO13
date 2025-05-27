import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Inicio from "./Inicio";
import ListaAlumnos from "./ListaAlumnos";
import NuevoAlumno from "./NuevoAlumno";
import EditarAlumno from "./EditarAlumno";
import AcercaDe from "./AcercaDe";

function App() {
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
