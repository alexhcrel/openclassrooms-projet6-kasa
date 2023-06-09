import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Descriptif from "../components/Descriptif";
import jsonData from "../data/logements.json";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Carrousel from "../components/Carrousel";
import '../styles/carrousel.css';
import '../styles/fichelogement.css';


const FicheLogement = () => {
  const [data, setData] = useState([]);

  useEffect((data) => {
    setData(jsonData);
  }, []);

  const { logementId } = useParams();

  const objet = jsonData.find((item) => item.id === logementId);


  return (
    <div className="fichelogement">

      <Navigation />      
      <div className="carrousel"><Carrousel key={objet.id} objet = {objet}/></div>
      <Descriptif key={objet.id.id} objet={objet} />
      <Footer />
    </div>
  );
};

export default FicheLogement;
