import React from "react";
import Descriptif_bandeau_left from "./Descriptif_bandeau_left";
import Descriptif_bandeau_right from "./Descriptif_bandeau_right";

const Descriptif_bandeau = () => {
  return (
    <div className="descriptif_bandeau">
      <Descriptif_bandeau_left />
      <Descriptif_bandeau_right />
    </div>
  );
};

export default Descriptif_bandeau;
