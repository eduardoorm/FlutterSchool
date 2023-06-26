import React from "react";
import "./Registration.css";
export const Registration = () => {
  return (
    <section id="register">
      <div className="SectionRegistation">
        <div className="containerRegistration">
          <p>¿Qué esperas?</p>
          <p className="txtInscribete">INSCRÍBETE</p>
          <a
            href="https://gdg.community.dev/events/details/google-gdg-ica-presents-flutter-school-2023/"
            target="_blank"
          >
            <button className="button btnRegistration">¡Regístrate!</button>
          </a>
          <br />
          <a href="#">
            <button className="button btnCodeConduct">
              Código de Conducta
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};
