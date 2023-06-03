import React from "react";
import Collapse from './Collapse'

const Descriptif = ({ objet }) => {
  let tagsArray = [];
  if (objet && objet.tags) {
    tagsArray = objet.tags;
  }

  let equipmentsArray = [];
  if (objet && objet.equipments) {
    equipmentsArray = objet.equipments;
  }

  return (
    <div className="descriptifComplet" key={objet.id.id}>
      <div className="descriptif_bandeau">
        <div className="descriptif_bandeau_left">
          <div>
            <h1>{objet.title}</h1>
            <h3>{objet.location}</h3>
          </div>
          <div className="tags">
            {tagsArray.map((tag, index) => (
              <h4 key={index}>{tag}</h4>
            ))}
          </div>
        </div>

        <div className='descriptif_bandeau_right'>
            <div className='host'>
                <h3>{objet.host.name}</h3>
                <img src={objet.host.picture} alt={objet.title} />
            </div>
            <div className = "stars">

            </div>
        </div>




      </div>


      <div className="descriptif_corps">
      <div>
        <Collapse title="Description">
          <p>{objet.description}</p>
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





    </div>
  );
};

export default Descriptif;
