import React from "react";

import "../styles/carroussel.css";

const Carroussel = ({ objet }) => {
  const slides = [];

  let picturesArray = [];
  if (objet && objet.pictures) {
    picturesArray = objet.pictures;
  }

  console.log(picturesArray);

  return (
    <div className="sliderStyles">
      <div
        className="slideStyles"
        style={{ backgroundImage: `url(${picturesArray[0]})`}}
      >
        <div className="arrow leftArrow">‹</div>

        <div className="arrow rightArrow">›</div>
      </div>
    </div>

    //<ImageSlider slides={slides}/>

    /* <Slide className="carroussel" key={objet.id.id}>
      {picturesArray.map((picturesArray) => (
        <div style={{ backgroundImage: `url(${picturesArray})` }}>

        </div>
      ))}
    </Slide>
    */
  );
};

export default Carroussel;
