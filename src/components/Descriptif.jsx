import React from "react";

const Descriptif = ({ objet }) => {
  console.log(objet);

  return (
    <div className="descriptif" key={objet.id.id}>
      <h2>{objet.title}</h2>
    </div>
  );
};

export default Descriptif;
