import React, { useEffect, useState } from 'react';
import jsonData from '../data/logements.json';

const CardLogement = () => {
    const [data, setData] = useState([]);
  
    useEffect (() => {
        setData(jsonData);
    }, []);


    return (
        <div className="cardlogement">
           <ul>
                {
                    data.map((logement, index) => (
                        <li key={index}><img src={logement.cover} alt={logement.title} /></li>
                    ))
                }
            </ul>
        </div>
    );
};

export default CardLogement;