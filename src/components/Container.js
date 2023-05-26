import React, { useEffect, useState } from 'react';
import jsonData from '../data/logements.json';
// import Card_logement from './Card_logement';


const Container = () => {
    const [data, setData] = useState([]);
  
    useEffect (() => {
        setData(jsonData);
    }, []);
    
    
    
    return (
        <div className="container">
            <h1>liste des logements</h1>
            <ul>
                {
                    data.map((logement, index) => (
                        // <Card_logement key={index} logement={logement}/>
                        <li key={index}>{logement.title}</li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Container;