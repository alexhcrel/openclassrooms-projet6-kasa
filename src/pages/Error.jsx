import React from 'react';
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import "../styles/error.css";

import { NavLink } from 'react-router-dom';

const Error = () => {
    return (
     
        <div className='page page_error'>
            <Navigation />
            <div className="erreur">
            <span>404</span>
            <div className="message_erreur"> Oups! La page que vous demandez n'existe pas</div>
            <NavLink
            to="/">
            <div className='retour'> Retourner sur la page d'accueil </div>
            </NavLink>
            </div>
            <Footer />
        </div>
    );
};

export default Error;