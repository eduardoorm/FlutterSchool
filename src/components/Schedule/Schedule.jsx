import "./Schedule.css";
import ItemSchedule from "./ItemSchedule";
import React, { useState } from "react";
const Schedule = () => {
  const [showDay1, setShowDay1] = useState(true);
  const [showDay2, setShowDay2] = useState(false);
  const [showDay3, setShowDay3] = useState(false);

  const toggleContainer = () => {
    if (showDay1 != true) {
      setShowDay1(!showDay1);
    }
    setShowDay2(false);
    setShowDay3(false);
  };

  const toggleDay2 = () => {
    setShowDay1(false);
    setShowDay3(false);
    setShowDay2(!showDay2);
  };

  const toggleDay3 = () => {
    setShowDay1(false);
    setShowDay2(false);
    setShowDay3(!showDay3);
  };
  return (
    <div className="containerSchedule">
      <h1>Schedule</h1>
      <div className="containenButtonsDay">
        <button onClick={toggleContainer} className="button btnDays btnDay1">
          Sábado 05
        </button>
        <button onClick={toggleDay2} className="button btnDays btnDay2">
          Sábado 12
        </button>
        <button onClick={toggleDay3} className="button  btnDays btnDay3">
          Sábado 19
        </button>
      </div>
      {showDay1 && (
        <div className="containerItemsSchedule">
          <ItemSchedule
            hours={"9:30 AM"}
            dateSession={"AGT 06"}
            titleSession={"Introducción a Flutter"}
          />
          <ItemSchedule
            hours={"10:30 AM"}
            dateSession={"AGT 06"}
            titleSession={"Introducción a Flutter"}
          />
          <ItemSchedule
            hours={"11:30 AM"}
            dateSession={"AGT 06"}
            titleSession={"Introducción a Flutter"}
          />
          <ItemSchedule
            hours={"12:00 PM"}
            dateSession={"AGT 06"}
            titleSession={"Introducción a Flutter"}
          />
        </div>
      )}

      {showDay2 && (
        <div className="containerItemsSchedule">
          <ItemSchedule
            hours={"9:30 AM"}
            dateSession={"AGT 06"}
            titleSession={"¿Qué es Dart?"}
          />
          <ItemSchedule
            hours={"10:30 AM"}
            dateSession={"AGT 06"}
            titleSession={"Introducción a Flutter"}
          />
          <ItemSchedule
            hours={"11:30 AM"}
            dateSession={"AGT 06"}
            titleSession={"Introducción a Flutter"}
          />
          <ItemSchedule
            hours={"12:00 PM"}
            dateSession={"AGT 06"}
            titleSession={"Introducción a Flutter"}
          />
        </div>
      )}

      {showDay3 && (
        <div className="containerItemsSchedule">
          <ItemSchedule
            hours={"9:30 AM"}
            dateSession={"AGT 06"}
            titleSession={"Creando una aplicación en Flutter"}
          />
          <ItemSchedule
            hours={"10:30 AM"}
            dateSession={"AGT 06"}
            titleSession={"Introducción a Flutter"}
          />
          <ItemSchedule
            hours={"11:30 AM"}
            dateSession={"AGT 06"}
            titleSession={"Introducción a Flutter"}
          />
          <ItemSchedule
            hours={"12:00 PM"}
            dateSession={"AGT 06"}
            titleSession={"Introducción a Flutter"}
          />
        </div>
      )}
    </div>
  );
};

export default Schedule;
