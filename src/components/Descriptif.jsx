import React from 'react';

const Descriptif = ({logement}) => {
    console.log(logement)
   
    return (
        <div className='descriptif'>
            <h2>{logement.id}</h2>
        </div>
    );
};

export default Descriptif;