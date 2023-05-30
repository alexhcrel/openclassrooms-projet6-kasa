// Descriptif.js
import React from "react";
import { NavLink } from "react-router-dom";

const Descriptif = ({ logement }) => {
  if (!logement) {
    return null;
  }

  const { cover, title } = logement; // Utilisation de la destructuration pour extraire les propriétés

  return (
    <div className="descriptif">
      <NavLink to="./Fichelogement">
        <div className="descriptif-cardlogement">
          <img src={cover} alt={title} />
          <h3>{title}</h3>
        </div>
      </NavLink>
    </div>
  );
};

export default Descriptif;
