import React, { useEffect, useState, } from "react";
import jsonData from "../data/logements.json";
import { NavLink } from "react-router-dom"

// import Card_logement from './Card_logement';

const Container = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    setData(jsonData);
  }, []);

  return (
    <div className="cards">
{data.map((logement) => (

 <NavLink to={`/fichelogement/${logement.id}`} key={logement.id} state={{ logement }}> 

<div className="card" /*onClick={() => handleClick("http://localhost:3000/fichelogement")}*/>
      
      <div className="cardlogement">
        <img src={logement.cover} alt={logement.title} />
        <h3>{logement.title}</h3>
      </div>
    
  </div>


</NavLink>
))}

    </div>)}

export default Container;