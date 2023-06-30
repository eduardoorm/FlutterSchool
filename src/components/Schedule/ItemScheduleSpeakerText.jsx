import React from "react";

const ItemScheduleSpeakerText = ({ hours, dateSession, titleSession , imageUrl }) => {
  return (
    <div className="containerItemSchedule">
      <div className="containerDateHourItemSchedule">
        <p className="hourItemSchedule">
          {hours} <br></br>
          <span className="dateItemSchedule">{dateSession}</span>
        </p>
      </div>
      <div className="sessionInformationItemSchedule">
        <div style={{backgroundImage:`url(${imageUrl})`}} className="imgSpeakerItemSchedule"></div>
        <p className="titleSessionItemSchedule">
          {titleSession} <br />
          <span className="nameSpeakerItemSchedule">Pierre Guillen</span>
        </p>
      </div>
    </div>
  );
};

export default ItemScheduleSpeakerText;