import React from "react";
import styled from "styled-components/macro";

export default function Cards({ imgSrc }) {
  return (
    <CardContainer>
      <img src={imgSrc} alt="Bild" />
    </CardContainer>
  );
}

const CardContainer = styled.div`
  width: 180px;
  height: 180px;
  background-color: black;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
