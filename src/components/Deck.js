import React from "react";
import styled from "styled-components/macro";
import pic1 from "../assets/1.jpg";
import pic2 from "../assets/2.png";
import pic3 from "../assets/3.jpg";
import pic4 from "../assets/4.jpg";
import pic5 from "../assets/5.jpg";
import pic6 from "../assets/6.jpg";
import pic7 from "../assets/7.jpg";
import pic8 from "../assets/8.jpg";
import Cards from "./Cards";

export default function Deck() {
  const pics = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8];
  const pics2 = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8];

  return (
    <DeckContainer>
      {pics.map((pic, index) => (
        <Cards imgSrc={pic} key={index} />
      ))}
      {pics2.map((pic, index) => (
        <Cards imgSrc={pic} key={index} />
      ))}
    </DeckContainer>
  );
}

const DeckContainer = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
`;
