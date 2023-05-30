import React from "react";



const Card = ({ logement }) => {
  function handleClick(url) {
    window.open(url);
  }

  return (
    <div className="card" onClick={() => handleClick("http://localhost:3000/fichelogement")}>
      
        <div className="cardlogement">
          <img src={logement.cover} alt={logement.title} />
          <h3>{logement.title}</h3>
        </div>
      
    </div>
  );
};

export default Card;
