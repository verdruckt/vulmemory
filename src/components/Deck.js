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

const pics = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8];

export default function Deck() {
  function generateDeck(cardArray) {
    const halfArr = cardArray.map((img, id) => ({
      id,
      src: img,
      clicked: false,
    }));

    const objArr = [...halfArr, ...halfArr];
    return randomize(objArr);
  }

  function randomize(Arr) {
    const result = [];
    while (Arr.length > 0) {
      const num = Math.floor(Math.random() * Arr.length);
      result.push(...Arr.splice(num, 1));
    }
    console.log("pieps", result);
    return result;
  }

  const deckObj = generateDeck(pics);

  return (
    <DeckContainer>
      {deckObj.map((picObj, index) => (
        <Cards imgSrc={picObj.src} key={index} />
      ))}
    </DeckContainer>
  );
}

const DeckContainer = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
`;
