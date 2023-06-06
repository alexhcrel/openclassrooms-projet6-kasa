import React from "react";
import Collapse from "./Collapse";
import '../styles/fichelogement.css';

const Descriptif = ({ objet }) => {
  let tagsArray = [];
  if (objet && objet.tags) {
    tagsArray = objet.tags;
  }

  let equipmentsArray = [];
  if (objet && objet.equipments) {
    equipmentsArray = objet.equipments;
  }

  const note = objet.rating;
  const noteInverse = 5 - note;
  const items = [];

  for (let i = 0; i < 5; i++) {
    items.push(<img src="../redstar.png" />);
  }

  for (let j = 0; j < noteInverse; j++) {
    items.pop();
  }
  for (let k = 0; k < noteInverse; k++) {
    items.push(<img src="../greystar.png" />);
  }
  //

  // for (let i = 0; i < note; i++) {
  //

  //   if (i < 5) {
  //     itemsInverse.pop(<img key={`greystar-${i}`} src="../greystar.png" />);

  return (
    <div className="descriptifComplet" key={objet.id.id}>
      <div className="descriptif_bandeau">
        <div className="descriptif_bandeau_left">
          <div>
            <h1>{objet.title}</h1>
            <p>{objet.location}</p>
          </div>
          <div className="tags">
            {tagsArray.map((tag, index) => (
              <h4 key={index}>{tag}</h4>
            ))}
          </div>
        </div>

        <div className="descriptif_bandeau_right">
          <div className="host">
            <p>{objet.host.name}</p>
            <img src={objet.host.picture} alt={objet.title} />
          </div>

          <div className="stars">{items}</div>
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
