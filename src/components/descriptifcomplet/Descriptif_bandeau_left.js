import React from 'react';

const Descriptif_bandeau_left = () => {
    const logement =JSON.parse(sessionStorage.getItem('logement'));
    let tagsArray = [];
    if (logement && logement.tags) {
        tagsArray = logement.tags;
      }
      
      console.log(tagsArray);

    return (
        <div className='descriptif_bandeau_left'>
            <div><h1>{logement.title}</h1>
            <h3>{logement.location}</h3>
            </div>
            <div className='tags'>
            {tagsArray.map((tag, index) => (
          <h4 key={index}>{tag}
        
            </h4>))}
            </div>
        </div>
    );
};

export default Descriptif_bandeau_left;