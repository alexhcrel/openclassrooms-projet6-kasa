import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import BannerFicheLogement from "../components/BannerFicheLogement";
import Descriptif from "../components/Descriptif";
import jsonData from "../data/logements.json";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const FicheLogement = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(jsonData);
  }, []);

  const { logementId } = useParams();

  const objet = jsonData.find((item) => item.id === logementId);
  console.log(objet);

  return (
    <div>
      <Navigation />
      <BannerFicheLogement />
      <div className="cards">
        <p>{objet.title}</p>
      </div>
      <Footer />
    </div>
  );
};

export default FicheLogement;
