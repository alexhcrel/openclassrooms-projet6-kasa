import React, { useState } from 'react';

const DropdownLeft = () => {
    const logement =JSON.parse(sessionStorage.getItem('logement'));
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdownLeft = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="descriptif_corps_left">
      <button className="dropdown-toggle" onClick={toggleDropdownLeft}>
        <h4>Description</h4>
      </button>

      {isOpen && (
        <div className="dropdown-content-left">
          {/* Contenu du dropdown */}
          <ul>
            <li>{logement.description}</li>

          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownLeft;
