// src/components/Permisos.jsx
import { useState } from "react";

const Permisos = () => {
  const [dni, setDni] = useState("");
  const [asistencia, setAsistencia] = useState([]);

  
  const estudiantes = [
    {
      id: "1620474",
      nombre: "Jose Andres",
      carrera: "Software",
      semestre: "5",
    },
    {
      id: "1546024",
      nombre: "Miguel Angel",
      carrera: "Software",
      semestre: "4",
    },
  ];

  
  const buscarEstudiante = (id) => {
    return estudiantes.find((est) => est.id === id);
  };

  
  const registrarAsistencia = (e) => {
    e.preventDefault();

    if (!dni) return;

    const estudiante = buscarEstudiante(dni);

    if (!estudiante) {
      alert("Estudiante no encontrado");
      return;
    }

    const ahora = new Date();

    const nuevoRegistro = {
      id: estudiante.id,
      nombre: estudiante.nombre,
      carrera: estudiante.carrera,
      semestre: estudiante.semestre,
      fechaIngreso: ahora.toLocaleDateString(),
      horaIngreso: ahora.toLocaleTimeString(),
    };

    setAsistencia([...asistencia, nuevoRegistro]);
    setDni("");
  };

  return (
    <div>
      {/* FORMULARIO */}
      <section className="form-section">
        <h2>Registro de Asistencia</h2>

        <form onSubmit={registrarAsistencia}>
          <label htmlFor="dni">ID DE ESTUDIANTE:</label>

          <input
            type="text"
            id="dni"
            value={dni}
            onChange={(e) => setDni(e.target.value)}
            required
            maxLength="8"
          />

          <button type="submit">Registrar Ingreso</button>
        </form>
      </section>

      {/* TABLA */}
      <section className="list-section">
        <h2>Asistencia Registrada</h2>

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Carrera</th>
              <th>Semestre</th>
              <th>Fecha de Ingreso</th>
              <th>Hora de Ingreso</th>
            </tr>
          </thead>

          <tbody>
            {asistencia.map((a, index) => (
              <tr key={index}>
                <td>{a.id}</td>
                <td>{a.nombre}</td>
                <td>{a.carrera}</td>
                <td>{a.semestre}</td>
                <td>{a.fechaIngreso}</td>
                <td>{a.horaIngreso}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <footer>
        <p>SENATI</p>
      </footer>
    </div>
  );
};

export default Permisos;
