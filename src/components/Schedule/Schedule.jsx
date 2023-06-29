import React from "react";
import "./Schedule.css";
import ItemSchedule from "./ItemSchedule";
const Schedule = () => {
  return (
    <div className="containerSchedule">
      <h1>Schedule</h1>
      <div className="containenButtonsDay">
      <button className="button btnDay1">Day 1</button>
      <button className="button btnDay2">Day 2</button>
      <button className="button btnDay3">Day 3</button>
      </div>

      <div className="containerItemsSchedule">
        <ItemSchedule/>
        <ItemSchedule/>
        <ItemSchedule/>
        <ItemSchedule/>
      </div>
    </div>
  );
};

export default Schedule;
