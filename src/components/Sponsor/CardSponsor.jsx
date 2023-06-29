import React from "react";
import "./CardSponsor.css";
const CardSponsor = ({ imageUrl, href }) => {
  return (
    <div className="containerImageSponsor">
      <a href={href} target="_blank">
        <div
          className="imgSponsor"
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
        <div className="rangeSponsor"><p className="txtRangeSponsor">Sponsor Gold</p></div>
      </a>
    </div>
  );
};

export default CardSponsor;
