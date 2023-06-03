import React from "react";
// import jsonData from "../data/logements.json";
import { NavLink } from "react-router-dom";

// import Card_logement from './Card_logement';

const Cards = ({logement}) => {
  console.log(logement)
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   setData(jsonData);
  // }, []);

  return (            <NavLink to={`/fichelogement/${logement.id}`}
  key={logement.title}
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
