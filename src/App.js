import React from "react";
import Perfiles from "./Componentes/Perfiles";
import "./App.css";

// Importación de imágenes para los perfiles del equipo
import img1 from "./img/foto1.jpg";
import img2 from "./img/foto6.jpg";
import img3 from "./img/foto2.jpg";
import img4 from "./img/foto7.jpg";
import img5 from "./img/foto3.jpg";
import img6 from "./img/foto8.jpg";
import img7 from "./img/foto4.jpg";
import img8 from "./img/foto9.jpg";
import img9 from "./img/foto5.jpg";
import img10 from "./img/foto10.jpg";

function App() {
  const personas = [
    {
      nombre: "Will Smith",
      cargo: "Web Developer & Ui-Ux Designer",
      descripcion:
        "Destreza en React, Bootstrap y diseño de interfaces modernas para aplicaciones web altamente interactivas.",
      imagen: img1,
    },
    {
      nombre: "Ana Torres",
      cargo: "Frontend Developer",
      descripcion:
        "Especialista en Vue.js y prototipado en Figma con experiencia en entornos colaborativos y productos digitales.",
      imagen: img2,
    },
    {
      nombre: "Carlos Méndez",
      cargo: "UX Researcher",
      descripcion:
        "Experto en análisis de comportamiento, validación de interfaces y pruebas de usabilidad con usuarios reales.",
      imagen: img3,
    },
    {
      nombre: "Lucía Rojas",
      cargo: "UI Designer",
      descripcion:
        "Diseñadora de interfaces con enfoque en usabilidad, diseño accesible, sistemas visuales y experiencia atractiva.",
      imagen: img4,
    },
    {
      nombre: "Andrés Parra",
      cargo: "React Developer",
      descripcion:
        "Desarrollador especializado en React con dominio de hooks, componentes reutilizables y diseño responsivo.",
      imagen: img5,
    },
    {
      nombre: "Valentina Ruiz",
      cargo: "Full Stack Developer",
      descripcion:
        "Experta en frontend y backend con conocimientos sólidos en APIs REST, bases de datos y frameworks modernos.",
      imagen: img6,
    },
    {
      nombre: "David Gómez",
      cargo: "Scrum Master",
      descripcion:
        "Facilitador ágil con experiencia liderando equipos SCRUM, planificación de sprints y mejora continua del proceso.",
      imagen: img7,
    },
    {
      nombre: "Camila Herrera",
      cargo: "Product Designer",
      descripcion:
        "Diseñadora de producto centrada en el usuario, flujos de interacción, wireframes y prototipos funcionales.",
      imagen: img8,
    },
    {
      nombre: "Juan Martínez",
      cargo: "Backend Developer",
      descripcion:
        "Especialista en Node.js y PostgreSQL, desarrolla APIs eficientes, seguras y escalables para plataformas web.",
      imagen: img9,
    },
    {
      nombre: "Natalia Suárez",
      cargo: "QA Engineer",
      descripcion:
        "Ingeniera QA con dominio en pruebas automatizadas, gestión de bugs y validación funcional en entornos ágiles.",
      imagen: img10,
    },
  ];

  return (
    <div className="App container mt-5">
      <h2 className="text-center fw-bold mt-5">Nuestro Equipo de Trabajo</h2>
      <p className="text-center mb-4">
        Conformado por profesionales comprometidos con la innovación, el diseño
        y el desarrollo de soluciones digitales. Cada miembro aporta una visión
        única que fortalece nuestro enfoque colaborativo y orientado a
        resultados.
      </p>

      <div className="d-flex flex-column align-items-center">
        {personas.map((persona, index) => (
          <Perfiles
            key={index}
            nombre={persona.nombre}
            cargo={persona.cargo}
            descripcion={persona.descripcion}
            imagen={persona.imagen}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
