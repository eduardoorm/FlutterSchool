import React from "react";
import "./Registration.css";
import logo from "../../assets/logoDash.png";
export const Registration = () => {
  return (
    <section id="register">
      <div className="SectionRegistation">
        <div className="containerRegistration">
          <div className="txtContainerRegistration">
            <p>¿Qué esperas?</p>
            <p className="txtInscribete">INSCRÍBETE</p>
          </div>
          <a
            href="https://gdg.community.dev/events/details/google-gdg-ica-presents-flutter-school-2023/"
            target="_blank"
          >
            <button className="button btnRegistration">¡Regístrate!</button>
          </a>
          <br />
          <a target="_blank" href="https://drive.google.com/file/d/1EXp9SbPahGlr6Dq9obOpL4a8bqCL6N4h/view?usp=sharing">
            <button className="button btnCodeConduct">
              Código de Conducta
            </button>
          </a>
          <br></br>
          <img src={logo} className="imgRegistration aos-init aos-animate"  data-aos="zoom-in"/>
        </div>
      </div>
    </section>
  );
};
