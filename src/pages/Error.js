import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Error = () => {
    return (
        <div className='page page_error'>
            <Navigation />
            <h1>Error</h1>
            <Footer />
        </div>
    );
};

export default Error;