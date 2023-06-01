import React, { useEffect, useState } from "react";
import jsonData from "../data/logements.json";
import Card from "./Card";
import { NavLink } from "react-router-dom"


// import Card_logement from './Card_logement';

const Container = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    setData(jsonData);
  }, []);


  return (
    <div className="container">
  
      {data.map((logement) => (
          <NavLink to={`/fichelogement/${logement.id}`} key={logement.id} state={{ logement }}> 
            <Card logement={logement} />
          </NavLink>
        ))}
      

    </div>
  );
};

export default Container;
