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
  console.log(player)
  return (
    <MenuWrapper>
      <Stats>
      <a href="https://test.themoonshinepack.com/vv/index.html#">Zurück</a>
        <a href="/#">Runde {round}</a>
        <Player player={player}>P1: {player1Pairs.length}</Player>
        <Player2 player={player}>P2: {player2Pairs.length}</Player2>
        <img src={RestartImg} alt="Restart" onClick={handleRestart} />
      </Stats>
      <hr />
    </MenuWrapper>
  );
};

export default Menu;
const Player = styled.span`
color: ${props=>props.player === "Player 1" ? "red": "white"};
font-weight: ${props=>props.player === "Player 1" ? "bold": "normal"}
`
const Player2 = styled(Player)`
color: ${props=>props.player === "Player 2" ? "red": "white"};
font-weight: ${props=>props.player === "Player 2" ? "bold": "normal"}
`
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
 a {
    font-size: 1rem;
    color: #f3f3f3;
  }

  > * {
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
  a {
    font-size:1.5rem;
  }
  > * {
    transition: all 0.5s ease-in-out;

    :hover {
      text-shadow: 1px solid rebeccapurple;
      transform: none;
    }
  }
`;
