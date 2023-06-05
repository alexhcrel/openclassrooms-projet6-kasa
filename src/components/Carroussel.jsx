import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import '../styles/carroussel.css';

const Carroussel = ({ objet }) => {
  let picturesArray = [];
  if (objet && objet.pictures) {
    picturesArray = objet.pictures;
  }

  console.log(objet);

  return (
    <Slide className="carroussel" key={objet.id.id}>
      {picturesArray.map((picturesArray) => (
        <div style={{ backgroundImage: `url(${picturesArray})` }}>
          
        </div>
      ))}
    </Slide>
  );
};

export default Carroussel;
