import React from 'react';
import Navigation from '../components/Navigation';
import Bandeau_accueil from '../components/Bandeau_accueil';
import Container from '../components/Container';
import Footer from '../components/Footer';



const Home = () => {
    return (
        <div className="page page_home">
            <Navigation />
            <Bandeau_accueil />
            <Container />
            <Footer />
        </div>
    );
};

export default Home;