import React, { useState } from 'react';

const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className="collapse-title" onClick={toggleCollapse}>{title}</button>
      {isOpen && <div>{children}</div>}
    </div>
  );
};

export default Collapse;
