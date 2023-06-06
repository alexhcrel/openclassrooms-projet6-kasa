import React, { useEffect } from "react";

import "../styles/carroussel.css";
import { useState } from "react";

const Carroussel = ({ objet }) => {
  // const isUnique = () =>{

  // }

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
            
          
              <div className="arrow leftArrow" onClick={goToPrevious}>
                ‹
              </div>
              <div className="arrow rightArrow" onClick={goToNext}>
                ›
              </div>
              
           
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default Carroussel;