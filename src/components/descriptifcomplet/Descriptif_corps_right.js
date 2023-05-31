import React, { useState } from "react";

const DropdownRight = () => {
  const logement = JSON.parse(sessionStorage.getItem("logement"));
  const [isOpen, setIsOpen] = useState(false);
  let equipmentsArray = [];
  if (logement && logement.equipments) {
    equipmentsArray = logement.equipments;
  }

  const toggleDropdownRight = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="descriptif_corps_right">
      <button className="dropdown-toggle" onClick={toggleDropdownRight}>
        <h4>Equipements</h4>
      </button>

      {isOpen && (
        <div className="dropdown-content-right">
          {equipmentsArray.map((equipment, index) => (
            <p key={index}>{equipment}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownRight;
