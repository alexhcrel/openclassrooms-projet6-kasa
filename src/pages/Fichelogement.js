import React from 'react';
import Navigation from '../components/Navigation';
import Bandeau_fichelogement from '../components/Bandeau_fichelogement';
import Descriptifcomplet from '../components/descriptifcomplet/Descriptifcomplet'



const Fichelogement = () => {
  
    

   return (
        <div className='page page_fichelogement'>
            <Navigation />
            <Bandeau_fichelogement />
            <Descriptifcomplet />

        
            

            
        </div>
    );
};

export default Fichelogement;