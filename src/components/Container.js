import React, { useEffect, useState } from "react";
import jsonData from "../data/logements.json";
import Card from "./Card";


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
          <Card key={logement.id} logement={logement} />
        ))}
      </ul>
    </div>
  );
};

export default Container;
