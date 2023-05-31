import React, { useEffect, useState } from "react";
import jsonData from "../data/logements.json";
import Card from "./Card";
import Titre_fiche from "./Titre_fiche";


// import Card_logement from './Card_logement';

const Container = () => {

  const handleClick = (logement) => {
    sessionStorage.clear();
    sessionStorage.setItem("logement", JSON.stringify(logement));
    // Naviguer vers la page Fichelogement ici
  };


  const [data, setData] = useState([]);

  useEffect(() => {
    setData(jsonData);
  }, []);




  return (
    <div className="container">
      <ul>
      {data.map((logement) => (
          <div key={logement.id} onClick={() => handleClick(logement)}>
            <Card logement={logement} />
          </div>
        ))}
      </ul>
      
    </div>
  );
};

export default Container;
