import React from "react";
import './Benefit.css'
import ItemBenefit from "./ItemBenefit";
const Benefit = () => {
  return (
    <div className="sectionBenefit">
      <h1 className="title">Beneficios</h1>
      <div className="containerBenefits">
       <ItemBenefit></ItemBenefit>
       <ItemBenefit></ItemBenefit>
       <ItemBenefit></ItemBenefit>
       <ItemBenefit></ItemBenefit>
      </div>
    </div>
  );
};

export default Benefit;
