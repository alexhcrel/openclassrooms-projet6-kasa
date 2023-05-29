import React from 'react';
import Navigation from '../components/Navigation';
import Bandeau_fichelogement from '../components/Bandeau_fichelogement';


import Descriptif from '../components/Descriptif';


const Fichelogement = () => {
    return (
        <div className='page page_fichelogement'>
            <Navigation />
            <Bandeau_fichelogement />
            <Descriptif />

            
        </div>
    );
};

export default Fichelogement;