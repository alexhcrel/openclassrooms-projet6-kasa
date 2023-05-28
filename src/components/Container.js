import React, { useEffect, useState } from "react";
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
        {data.map((logement, index) => (
          // <Card_logement key={index} logement={logement}/>
          // <li key={index}>{logement.title}</li>

          <li key={index}>
            <div className="cardlogement">
              <img src={logement.cover} alt={logement.title} />
              <h3 key={index}>{logement.title}</h3>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Container;

