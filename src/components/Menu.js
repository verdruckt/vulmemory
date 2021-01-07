import React from "react";
import styled from "styled-components";
import Timer from "./Timer";
import RestartImg from "../assets/restart.svg";

const Menu = ({
  round,
  handleRestart,
  seconds,
  handleSeconds,
  isActive,
  allMatched,
}) => {
  return (
    <MenuWrapper>
      <a href="https://test.themoonshinepack.com/vv/index.html#">Home</a>
      <Timer
        seconds={seconds}
        handleSeconds={handleSeconds}
        isActive={isActive}
      />
      <a href="/#">Round #{round}</a>
      <span>{allMatched.length} pairs found</span>
      <img src={RestartImg} alt="Restart" onClick={handleRestart} />
    </MenuWrapper>
  );
};

export default Menu;

const MenuWrapper = styled.div`
  width: 100%;
  margin: 1rem auto;

  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 10px 7px #00000038;
  img {
    height: 40px;
    height: clamp(30px, 2vw, 40px);
    margin: 0.5rem;
  }
  span {
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
