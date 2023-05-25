import React from 'react';
import Navigation from '../components/Navigation';
import Bandeau_fichelogement from '../components/Bandeau_fichelogement';

const Fichelogement = () => {
    return (
        <div>
            <Navigation />
            <Bandeau_fichelogement />
            <h1>Fiche Logement</h1>
        </div>
    );
};

export default Fichelogement;