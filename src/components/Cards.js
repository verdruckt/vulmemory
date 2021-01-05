import React, { useState } from "react";
import styled from "styled-components/macro";

export default function Cards({ imgSrc, handleClick, memLen }) {
  const [clicked, setClicked] = useState(false);

  return (
    <CardContainer
      active={clicked}
      onClick={() => {
        handleClick();
        setClicked(!clicked);
      }}
    >
      <div active={clicked} />
      <img src={imgSrc} alt="Bild" />
    </CardContainer>
  );
}

const CardContainer = styled.div`
  width: 200px;
  height: 200px;
  background-color: black;
  position: relative;
  div {
    transition: all 500ms ease-in-out;
    box-sizing: border-box;
    border: 5px dotted gold;
    background-color: ${(props) => (props.active ? "transparent" : "#de37e1")};
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
