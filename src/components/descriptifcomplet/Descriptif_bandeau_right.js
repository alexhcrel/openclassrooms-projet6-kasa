import React from 'react';

const Descriptif_bandeau_right = () => {
    const logement =JSON.parse(sessionStorage.getItem('logement'));

    return (
        <div className='descriptif_bandeau_right'>
            <div className='host'>
                <h3>{logement.host.name}</h3>
                <img src={logement.host.picture} alt={logement.title} />
            </div>
            <div className = "stars">

            </div>
        </div>
    );
};

export default Descriptif_bandeau_right;