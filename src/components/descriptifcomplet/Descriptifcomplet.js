import React from 'react';
import Descriptif_bandeau from './Descriptif_bandeau';
import Descriptif_corps from './Descriptif_corps';

const Descriptifcomplet = () => {
    return (
        <div className='descriptifcomplet'>
        
                <Descriptif_bandeau />
                <Descriptif_corps />
            
        </div>
    );
};

export default Descriptifcomplet;