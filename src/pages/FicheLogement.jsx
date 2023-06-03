import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Descriptif from "../components/Descriptif";
import jsonData from "../data/logements.json";
import Banner_fichelogement from "../components/BannerFicheLogement";
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
      <Banner_fichelogement />
      <div className="cards">
        <p>{objet.title}</p>
      </div>

      <Footer />
    </div>
  );
};

export default FicheLogement;
