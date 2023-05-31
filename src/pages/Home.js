import React from 'react';
import Navigation from '../components/Navigation';
import Bandeau_acceuil from '../components/Bandeau_acceuil';
import Container from '../components/Container';
import Footer from '../components/Footer';



const Home = () => {
    return (
        <div className="page page_home">
            <Navigation />
            <Bandeau_acceuil />
            <Container />
            <Footer />
        </div>
    );
};

export default Home;