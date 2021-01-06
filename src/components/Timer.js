import React, { useEffect } from "react";

const Timer = ({ seconds, handleSeconds, isActive }) => {
  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        handleSeconds((seconds) => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds, handleSeconds]);

  return (
    <div className="app">
      <div className="time">{seconds}s</div>
    </div>
  );
};

export default Timer;
