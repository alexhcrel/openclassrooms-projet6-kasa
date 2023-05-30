import React from 'react';
import Descriptif_corps_left from './Descriptif_corps_left';
import Descriptif_corps_right from './Descriptif_corps_right';

const Descriptif_corps = () => {
    return (
        <div className='descriptif_corps'>
            <Descriptif_corps_left />
            <Descriptif_corps_right />
            <h1>Descriptif_corps</h1>
        </div>
    );
};

export default Descriptif_corps;