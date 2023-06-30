import React from "react";
import "./InformationBar.css";
import ItemInformationBar from "./ItemInformationBar";
const InformationBar = () => {
  return (
    <div className="sectionInformationBar">
      <div className="containerInformation">
        <div className="containerInformationBar">
          <ItemInformationBar
            backgroundColor="rgba(0, 30, 255, 0.858)"
            textInformation={"Construye una app desde Cero"}
          ></ItemInformationBar>
          <ItemInformationBar
            backgroundColor={"rgba(255, 166, 0, 0.91)"}
            textInformation={"#FlutterSchoolIca"}
          ></ItemInformationBar>
          <ItemInformationBar
            backgroundColor={"rgba(0, 0, 0, 0.885)"}
            textInformation={"Conecta con desarolladores locales"}
          ></ItemInformationBar>
          <ItemInformationBar
            backgroundColor={"rgba(255, 0, 0, 0.752)"}
            textInformation={" Obten un certificado al finalizar"}
          ></ItemInformationBar>
          <ItemInformationBar
            backgroundColor={"rgba(0, 30, 255, 0.858)"}
            textInformation={"Muchas sorpresas durante el curso"}
          ></ItemInformationBar>
          <ItemInformationBar
            backgroundColor={"rgba(0, 0, 0, 0.885)"}
            textInformation={"Descubre el desarrollo móvil"}
          ></ItemInformationBar>
          <ItemInformationBar
            backgroundColor={"rgba(0, 30, 255, 0.858)"}
            textInformation={"Construye una app desde Cero"}
          ></ItemInformationBar>
          <ItemInformationBar
            backgroundColor={"rgba(255, 166, 0, 0.91)"}
            textInformation={"#FlutterSchoolIca"}
          ></ItemInformationBar>
          <ItemInformationBar
            backgroundColor={"rgba(0, 0, 0, 0.885)"}
            textInformation={"Conecta con desarolladores locales"}
          ></ItemInformationBar>
        </div>
      </div>
    </div>
  );
};

export default InformationBar;
