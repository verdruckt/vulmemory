import React from "react";
import styled from "styled-components";
import Timer from "./Timer";
import RestartImg from "../assets/restart.svg";

const Menu = ({
  round,
  handleRestart,
  seconds,
  startTime,
  handleSeconds,
  isActive,
  player,
  player1Pairs,
  player2Pairs,
}) => {
  return (
    <MenuWrapper>
      <Controls>
        <a href="https://test.themoonshinepack.com/vv/index.html#">Home</a>
        <span>{player}</span>
        <img src={RestartImg} alt="Restart" onClick={handleRestart} />
      </Controls>
      <hr />
      <Stats>
        <Timer
          seconds={seconds}
          startTime={startTime}
          handleSeconds={handleSeconds}
          isActive={isActive}
        />
        <a href="/#">Round #{round}</a>
        <span>P1: {player1Pairs.length}</span>
        <span>P2: {player2Pairs.length}</span>
      </Stats>
      <hr />
    </MenuWrapper>
  );
};

export default Menu;
const MenuWrapper = styled.div`
  width: 100%;
  box-shadow: 0 10px 7px #00000038;
  margin: 1rem auto;
  padding-bottom: 0.5rem;
`;

const Controls = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  img {
    height: 40px;
    height: clamp(30px, 2vw, 40px);
    margin: 0.5rem;
  }

  > * {
    color: #f3f3f3;
    background: none;
    border: none;
    font-size: 1.2rem;
    font-size: clamp(1rem, 6vw, 1.5rem);
    text-decoration: none;
    transition: all 0.5s ease-in-out;

    :hover {
      transform: scale(1.2);
    }
  }
`;
const Stats = styled(Controls)`
  > * {
    transition: all 0.5s ease-in-out;

    :hover {
      text-shadow: 1px solid rebeccapurple;
      transform: none;
    }
  }
`;
