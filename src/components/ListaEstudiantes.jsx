// src/components/ListaEstudiantes.jsx
import { useState, useEffect } from "react";
const ListaEstudiantes = () => {
  const [estudiantes, setEstudiantes] = useState([]);
  useEffect(() => {
    fetch("/lista_asistencia.json")
      .then((res) => res.json())
      .then((data) =>
        setEstudiantes(data.map((est) => ({ ...est, presente: false })))
      )
      .catch((err) => console.error("Error cargando estudiantes:", err));
  }, []);
  const toggleAsistencia = (id) => {
    setEstudiantes(
      estudiantes.map((est) =>
        est.id === id ? { ...est, presente: !est.presente } : est
      )
    );
  };
  return (
    <section>
      <h2>Lista de Estudiantes</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Asistencia</th>
          </tr>
        </thead>
        <tbody>
          {estudiantes.map((est) => (
            <tr key={est.id}>
              <td>{est.id}</td>
              <td>{est.nombre}</td>
              <td>
                <input
                  type="checkbox"
                  checked={est.presente}
                  onChange={() => toggleAsistencia(est.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default ListaEstudiantes;
