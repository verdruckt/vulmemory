import React, { useEffect } from "react";
import styled from "styled-components";

const Timer = ({ seconds, handleSeconds, isActive, startTime }) => {
  const timeGone = seconds - startTime;

  let secs = (time) => Math.floor((time % (1000 * 60)) / 1000);

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
    <TimerWrapper>
      <div className="time">{secs(timeGone)}s</div>
    </TimerWrapper>
  );
};

const TimerWrapper = styled.div`
color: white
`
export default Timer;
