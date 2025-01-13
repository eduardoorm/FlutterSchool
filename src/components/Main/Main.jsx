import React from "react";
import "./Main.css";
import ScrollToTopButton from "../Elements/ScrollToTopButton/ScrollToTopButton";

const Main = () => {
  return (
    <div className="containerMain">
      <p className="tituloContainerMain">
        FLUTTER SCHOOL<p className="anioContainerMain">2024</p>
      </p>
      <a target="_blank" href="#">
        <button className="button btnInscribirse">No disponible</button>
      </a>
     
    </div>
  );
};

export default Main;
