import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import Bandeau_accueil from '../components/Bandeau_accueil';
// import Container from '../components/Container';
import Footer from '../components/Footer';
import jsonData from "../data/logements.json";
import { NavLink } from "react-router-dom"
import Card from "../components/Card";

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

const Home = () => {
    return (
        <div className="page page_home">
            <Navigation />
            <Bandeau_accueil />
            <Container />
            <Footer />
        </div>
    );
};

export default Home;