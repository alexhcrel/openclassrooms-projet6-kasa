import React from 'react';

const Descriptif_bandeau_left = () => {
    const logement =JSON.parse(sessionStorage.getItem('logement'));

    return (
        <div className='descriptif_bandeau_left'>
            <h1>{logement.title}</h1>
            <h3>{logement.location}</h3>
        </div>
    );
};

export default Descriptif_bandeau_left;