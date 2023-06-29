import React from "react";

const ItemSchedule = () => {
  return (
    <div className="containerItemSchedule">
      <div className="containerDateHourItemSchedule">
        <p className="hourItemSchedule">
          9:30 AM <br></br>
          <span className="dateItemSchedule">NOV 06</span>
        </p>
      </div>
      <div className="sessionInformationItemSchedule">
        <div className="imgSpeakerItemSchedule"></div>
        <p className="titleSessionItemSchedule">
          GATES OPEN <br />
          <span className="nameSpeakerItemSchedule">Pierre Guillen</span>
        </p>
      </div>
    </div>
  );
};

export default ItemSchedule;
