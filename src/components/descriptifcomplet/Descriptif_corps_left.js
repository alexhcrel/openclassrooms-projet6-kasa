import React, { useState } from 'react';

const Dropdown = () => {
    const logement =JSON.parse(sessionStorage.getItem('logement'));
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="descriptif_corps_left">
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        Toggle Dropdown
      </button>
      {isOpen && (
        <div className="dropdown-content">
          {/* Contenu du dropdown */}
          <ul>
            <li>{logement.description}</li>

          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
