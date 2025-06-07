// src/Componentes/Perfiles.js
import React from "react";

const Perfiles = ({ nombre, cargo, descripcion, imagen, fondo }) => {
  return (
    <div
      className={`card mb-4 p-3 rounded-4 shadow`}
      style={{ backgroundColor: fondo, maxWidth: "700px" }}
    >
      <div className="d-flex align-items-center">
        <img
          src={imagen}
          alt={nombre}
          className="rounded-circle me-4"
          style={{ width: "80px", height: "80px" }}
        />
        <div>
          <h5 className="fw-bold mb-1">{nombre}</h5>
          <h6 className="mb-1">{cargo}</h6>
          <p className="mb-0">{descripcion}</p>
        </div>
      </div>
    </div>
  );
};

export default Perfiles;
