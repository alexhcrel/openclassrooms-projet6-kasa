import React from "react";
import { NavLink } from "react-router-dom";

const Card = ({ logement }) => {
  return (
    <div className="card">
      <NavLink to="./Fichelogement" >
        <div className="cardlogement">
          <img src={logement.cover} alt={logement.title} />
          <h3>{logement.title}</h3>
        </div>
      </NavLink>
    </div>

  );
};

export default Card;
