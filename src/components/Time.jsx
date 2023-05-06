import React from "react";

function Time() {

setInterval(updateTime, 1000);

function updateTime(){
    setTime(new Date().toLocaleTimeString());
}

var [time, setTime] = React.useState("TIME");
  return (
    <div>
      <h1>{time}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default Time;
