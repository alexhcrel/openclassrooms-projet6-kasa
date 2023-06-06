import React from "react";
import '../styles/cards.css';

import { NavLink } from "react-router-dom";

const Cards = ({ logement }) => {


  return (
    <NavLink
      to={`/fichelogement/${logement.id}`}
      key={logement.id}
      state={{ logement }}
    >
      <div
        className="card" /*onClick={() => handleClick("http://localhost:3000/fichelogement")}*/
      >
        <div className="cardlogement" style={{
        backgroundImage:`linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%), url(${logement.cover})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}>

          <h3>{logement.title}</h3>
        </div>
      </div>
    </NavLink>
  );
};

export default Cards;
