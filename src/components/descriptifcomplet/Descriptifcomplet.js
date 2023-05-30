import React from 'react';
import Descriptif_bandeau from './Descriptif_bandeau';
import Descriptif_corps from './Descriptif_corps';

const Descriptifcomplet = () => {
    return (
        <div className='descriptifcomplet'>
            <h1>huueee
                <Descriptif_bandeau />
                <Descriptif_corps />
            </h1>
        </div>
    );
};

export default Descriptifcomplet;