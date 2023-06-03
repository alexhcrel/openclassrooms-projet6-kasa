import React, { useState } from 'react';
import '../styles/collapse.css';

const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='valeurs'>
      <button className="collapse-title" onClick={toggleCollapse}>{title}</button>
      {isOpen && <div><p className="collapse-paragraph">{children}</p></div>}
    </div>
  );
};

export default Collapse;
