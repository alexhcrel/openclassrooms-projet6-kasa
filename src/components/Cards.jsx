import React from "react";

import { NavLink } from "react-router-dom";



const Cards = ({logement}) => {
  console.log(logement)
  

  return (        
    
    <NavLink
    to={`/fichelogement/${logement.id}`}
    key={logement.id}
    state={{ logement }}
  >
    <div
      className="card" /*onClick={() => handleClick("http://localhost:3000/fichelogement")}*/
    >
      <div className="cardlogement">
        <img src={logement.cover} alt={logement.title} />
        <h3>{logement.title}</h3>
      </div>
    </div>
    
  </NavLink>

  );
};

export default Cards;
