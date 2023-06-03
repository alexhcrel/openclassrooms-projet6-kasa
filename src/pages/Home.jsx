import React, { useEffect, useState } from "react";
import Banner from '../components/Banner';
import Cards from '../components/Cards';
import jsonData from "../data/logements.json";
import { NavLink } from "react-router-dom";





const Home = () => {
    const [data, setData] = useState([]);
 

    useEffect(() => {
      setData(jsonData);
    }, []);


    return (
        <div className="listelogement">
        <Banner />
        


        <div className="cards">
      {data.map(logement => (
        <div key={logement.id}>
            <Cards key={logement.id} logement={logement}/>
           
        </div>
      ))}
    </div>
        </div>
    );
};



export default Home;