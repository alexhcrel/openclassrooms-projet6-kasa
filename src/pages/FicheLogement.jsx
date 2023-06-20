import { useParams, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import Descriptif from "../components/Descriptif";
import jsonData from "../data/logements.json";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Carrousel from "../components/Carrousel";
import "../styles/carrousel.css";
import "../styles/fichelogement.css";

const FicheLogement = () => {
  const navigate = useNavigate();
  const { logementId } = useParams();
  const objet = jsonData.find((item) => item.id === logementId);

  useEffect(() => {
    if (typeof objet === "undefined") {
      navigate("/error");
    }
  }, [navigate, objet]);

  if (typeof objet === "undefined") {
    return null;
  }

  return (
    <div className="fichelogement">
      <Navigation />
      <div className="carrousel">
        <Carrousel key={objet.id} objet={objet} />
      </div>
      <Descriptif key={objet.id.id} objet={objet} />
      <Footer />
    </div>
  );
};

export default FicheLogement;
