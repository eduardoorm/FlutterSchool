import React from 'react'
import './CardSponsor.css'
const CardSponsor = ({imageUrl}) => {
  return (
    <div className="containerImageSponsor">
    <div className="imgSponsorGithub" style={{backgroundImage: `url(${imageUrl})`}}></div>
    </div>
  );
}

export default CardSponsor