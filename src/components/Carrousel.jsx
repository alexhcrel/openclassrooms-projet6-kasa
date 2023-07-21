import React from "react";

import "../styles/carrousel.css";
import { useState } from "react";

const Carrousel = ({ objet }) => {
  // const isUnique = () =>{

  // }
console.log(objet)
  const [currentIndex, setCurrentIndex] = useState(0);

  let picturesArray = [];
  if (objet && objet.pictures) {
    picturesArray = objet.pictures;
  }

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? picturesArray.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === picturesArray.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="sliderStyles">
      <div
        className="slideStyles"
        style={{ backgroundImage: `url(${picturesArray[currentIndex]})` }}
      >
        {picturesArray.length !== 1 && (
          <React.Fragment>
            
          <div className="fleches">
              <img onClick={goToPrevious} src ="../fleche-left.png" alt="left-arrow"/>
         
              <img onClick={goToNext} src ="../fleche-right.png" alt="right-arrow"/>
              </div>
              <div className="numerotation">
        <p>{currentIndex + 1}/{picturesArray.length}</p>
      </div>
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default Carrousel;
