import React from "react";
import styled from "styled-components/macro";
import { checkForAinB } from "../lib/deckFunctions";
import { PLAYER1 } from "../lib/playerLogic";

export default function Cards({
  imgSrc,
  handleClick,
  checked,
  picObj,
  matched,
  disabled,
  player,
}) {
  const activated =
    checkForAinB(picObj.uid, checked) || checkForAinB(picObj.id, matched);

  return (
    <CardContainer
      player={player}
      active={activated}
      done={checkForAinB(picObj.id, matched)}
      disabled={disabled}
      onClick={() => {
        handleClick();
      }}
    >
      <div active={checked} />
      <img src={imgSrc} alt="Bild" />
    </CardContainer>
  );
}

const CardContainer = styled.button`
  position: relative;
  background: none;
  border: none;
  transition: all 0.5s ease-in-out;

  :hover {
    transform: scale(1.05);
  }
  div {
    transition: all 500ms ease-in-out;
    box-sizing: border-box;
    background-color: ${(props) =>
      props.active
        ? "transparent"
        : props.player === PLAYER1
        ? "var(--card-color)"
        : "var(--card-color-2)"};
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    transform: scale(${(props) => (props.done ? "0.9" : "1.0")});
  }
  img {
    transform: scale(${(props) => (props.done ? "0.9" : "1.0")});
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
