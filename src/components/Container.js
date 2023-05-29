import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import jsonData from "../data/logements.json";
// import Card_logement from './Card_logement';

const Container = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(jsonData);
  }, []);

  return (
    <div className="container">
      <ul>
        {data.map((logement) => (

          <NavLink 
          to="/fichelogement"
          key={logement.id}>
            <div className="cardlogement">
              <img src={logement.cover} alt={logement.title} />
              <h3>{logement.title}</h3>
            </div>
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default Container;

