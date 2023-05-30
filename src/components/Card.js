import React from "react";


const Card = ({ logement }) => {
  function handleClick(url) {
    window.open(url);
  }

  return (
    <div className="card" onClick={() => handleClick("http://localhost:3001/fichelogement")}>
      <ul to="./Fichelogement">
        <div className="cardlogement">
          <img src={logement.cover} alt={logement.title} />
          <h3>{logement.title}</h3>
        </div>
      </ul>
      <ul>
       
      </ul>
    </div>
  );
};

export default Card;
