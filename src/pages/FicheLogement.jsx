import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Descriptif from "../components/Descriptif";
import jsonData from "../data/logements.json";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Carroussel from "../components/Carroussel";

const FicheLogement = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(jsonData);
  }, []);

  const { logementId } = useParams();

  const objet = jsonData.find((item) => item.id === logementId);


  return (
    <div>

      <Navigation />
  
      <div key={objet.id.id}></div>
      <Carroussel key={objet.id} objet = {objet}/>
      <Descriptif key={objet.id.id} objet={objet} />
      <Footer />
    </div>
  );
};

export default FicheLogement;
