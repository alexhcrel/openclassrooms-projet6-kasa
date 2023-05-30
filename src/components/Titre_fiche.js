import React from 'react';

const Titre_fiche = () => {
    const logement =JSON.parse(sessionStorage.getItem('logement'));

    return (
        <div>
            {logement.location}
        </div>
    );
};

export default Titre_fiche;