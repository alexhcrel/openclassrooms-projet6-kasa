import React from "react";
import Collapse from "../Collapse";
import '../../styles/fichelogement.css';

const DropdownLeft = () => {
  const logement = JSON.parse(sessionStorage.getItem("logement"));
  let equipmentsArray = [];
  if (logement && logement.equipments) {
    equipmentsArray = logement.equipments;
  }

  return (
    <div className="descriptif_corps">
      <div>
        <Collapse title="Description">
          <p>{logement.description}</p>
        </Collapse>
      </div>
      <div>
        <Collapse title="Equipements">
          <p>
            {equipmentsArray.map((equipment, index) => (
              <p key={index}>{equipment}</p>
            ))}
          </p>
        </Collapse>
      </div>
    </div>
  );
};

export default DropdownLeft;
