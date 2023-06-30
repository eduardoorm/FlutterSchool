import React from 'react';

const ItemSchedule = ({ hours,dateSession, titleSession }) => {

  return (
    <div className="containerItemSchedule">
      <div className="containerDateHourItemSchedule">
        <p className="hourItemSchedule">
          {hours} <br></br>
          <span className="dateItemSchedule">{dateSession}</span>
        </p>
      </div>
      <div className="sessionInformationItemSchedule">
        <div className="imgSpeakerItemSchedule"></div>
        <p className="titleSessionItemSchedule">
          {titleSession} <br />
          <span className="nameSpeakerItemSchedule">Pierre Guillen</span>
        </p>
      </div>
    </div>
  );
};

export default ItemSchedule;
