import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/navigation.css"

const Navigation = () => {




  
  return (
    <div className="Banner_nav">
    
      <img src ="../logo/kasa_red.svg" />
        {/* <Logo /> */}
   

      <div className="navigation">
        <ul>
          <NavLink
            to="/"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>Accueil</li>
          </NavLink>
          <NavLink
            to="/about"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>A Propos</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
