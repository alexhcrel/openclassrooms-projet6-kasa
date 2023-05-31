import React from "react";
import Navigation from "../components/Navigation";
import Bandeau_about from "../components/Bandeau_about";
import Footer from "../components/Footer";
import Collapse from "../components/Collapse";

const A_propos = () => {
  return (
    <div className="page page_about">
      <Navigation/>
      <Bandeau_about />
      <div className="collapse_about">
      <Collapse title ="Fiabilité">
        <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</p>
      </Collapse>
      <Collapse title="Respect">
        <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
      </Collapse>
      <Collapse title="Service">
        <p>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>
      </Collapse>
      <Collapse title="Titre 3">
        <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
      </Collapse>
      </div>
      <Footer />
    </div>
    
  );
};

export default A_propos;
