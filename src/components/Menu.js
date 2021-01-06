import React from "react";
import styled from "styled-components";

const Menu = ({ round, handleRestart }) => {
  return (
    <MenuWrapper>
      <a href="/#">Home</a>
      <a href="/#">Timer</a>
      <a href="/#">Round #{round}</a>
      <button onClick={handleRestart}>Restart</button>
    </MenuWrapper>
  );
};

export default Menu;

const MenuWrapper = styled.div`
  width: 100%;
  margin: 1rem auto;
  padding: 2rem 1rem;

  display: flex;
  justify-content: space-around;
  box-shadow: 0 10px 7px #00000038;
  > * {
    color: #f3f3f3;
    background: none;
    border: none;
    font-size: 2rem;
    text-decoration: none;
    transition: all 0.5s ease-in-out;

    :hover {
      transform: scale(1.2);
    }
  }
`;
