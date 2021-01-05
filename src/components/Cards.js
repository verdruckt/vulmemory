import React from "react";
import styled from "styled-components/macro";

export default function Cards({
  imgSrc,
  handleClick,
  checked,
  picObj,
  matched,
  disabled,
}) {
  const activated =
    checked.indexOf(picObj.uid) !== -1 || matched.indexOf(picObj.id) !== -1;
  const done = matched.indexOf(picObj.id) !== -1;
  return (
    <CardContainer
      active={activated}
      done={done}
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
  width: 200px;
  height: 200px;
  position: relative;
  background: none;
  border: none;
  div {
    transition: all 500ms ease-in-out;
    border: 5px dotted gold;
    box-sizing: border-box;
    background-color: ${(props) => (props.active ? "transparent" : "#de37e1")};
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
