import React, { useEffect } from "react";

const Timer = ({ seconds, handleSeconds, isActive, startTime }) => {
  const timeGone = seconds - startTime;

  let secs = Math.floor((timeGone % (1000 * 60)) / 1000);
  console.log(secs);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        handleSeconds(new Date().getTime());
      }, 1000);
    } else if (!isActive) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds, handleSeconds]);

  return (
    <div className="app">
      <div className="time">{secs}s</div>
    </div>
  );
};

export default Timer;
