import React, { useState } from "react";
import "../styles/collapse.css";

const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="valeurs">
      <button className="collapse-title" style={{ border: 'none', outline: 'none' }} onClick={toggleCollapse}>
      {title}
      {isOpen ? (
        <img src ="../fleche-haut.png" alt="up-arrow" />
      ) : (
        <img src ="../fleche-bas.png" alt="down-arrow"/>
      )}
    </button>
      {isOpen && (
        <div>
          <div className="collapse-paragraph">{children}</div>
        </div>
      )}
    </div>
  );
};

export default Collapse;
