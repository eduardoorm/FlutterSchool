import React from "react";
import "./Header.css";
import Main from "../Main/Main"
const Header = () => {
  return (
    <div className="background">
      <header className="flex header">
        <div className="logo">
          <div className="dashLogo"></div>
        </div>
        
        <nav className="navbar">
          <div className="containerNavbar">
          <h1>
            <a href="#about">Acerca de</a>
          </h1>
          <h1>
            <a href="#register">Registro</a>
          </h1>
          <h1>
            <a href="#speaker">Speaker</a>
          </h1>
          <h1>
            <a href="#partner">Socios</a>
          </h1>
          </div>
        </nav>
      </header>
      
      <Main/>
    </div>
  );
};

export default Header;
