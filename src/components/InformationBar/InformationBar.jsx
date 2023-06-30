import React from "react";
import "./InformationBar.css";
import ItemInformationBar from "./ItemInformationBar";
const InformationBar = () => {
  return (
    <div className="sectionInformationBar">
      <div className="containerInformation">
        <div className="containerInformationBar">
          <ItemInformationBar
            backgroundColor="#66b2f0"
            textInformation={"Construye una app desde Cero"}
          ></ItemInformationBar>
          <ItemInformationBar
            backgroundColor={"black"}
            textInformation={"#FlutterSchoolIca"}
          ></ItemInformationBar>
          <ItemInformationBar
            backgroundColor={"#66b2f0"}
            textInformation={"Conecta con desarolladores locales"}
          ></ItemInformationBar>
          <ItemInformationBar
            backgroundColor={"black"}
            textInformation={" Obten un certificado al finalizar"}
          ></ItemInformationBar>
          <ItemInformationBar
            backgroundColor={"#66b2f0"}
            textInformation={"Muchas sorpresas durante el curso"}
          ></ItemInformationBar>
          <ItemInformationBar
            backgroundColor={"black"}
            textInformation={"Descubre el desarrollo móvil"}
          ></ItemInformationBar>
          <ItemInformationBar
            backgroundColor={"#66b2f0"}
            textInformation={"Construye una app desde Cero"}
          ></ItemInformationBar>
          <ItemInformationBar
            backgroundColor={"black"}
            textInformation={"#FlutterSchoolIca"}
          ></ItemInformationBar>
          <ItemInformationBar
            backgroundColor={"#66b2f0"}
            textInformation={"Conecta con desarolladores locales"}
          ></ItemInformationBar>
        </div>
      </div>
    </div>
  );
};

export default InformationBar;
