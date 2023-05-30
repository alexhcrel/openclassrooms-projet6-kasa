import React, { useState } from 'react';

const Dropdown = () => {
  const logement = JSON.parse(sessionStorage.getItem('logement'));
  const [isOpen, setIsOpen] = useState(false);
  const equipementsArray = logement && logement.equipements ? logement.equipements : [];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="descriptif_corps_right">
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        Toggle Dropdown
      </button>
      {isOpen && (
        <div className="dropdown-content">
          <ul>
            {equipementsArray.map((equipement, index) => (
              <li key={index}>
                <h4>{equipement}</h4>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
