import React from 'react';
import Navigation from '../components/Navigation';
import Bandeau_acceuil from '../components/Bandeau_acceuil';


const Home = () => {
    return (
        <div className="page_home">
            <Navigation />
            <Bandeau_acceuil />

            <h1>Acceuil</h1>
        </div>
    );
};

export default Home;