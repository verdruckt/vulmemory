import React, { useState } from "react";
import styled from "styled-components/macro";
import pic1 from "../assets/1.jpg";
import pic2 from "../assets/2.png";
import pic3 from "../assets/3.jpg";
import pic4 from "../assets/4.jpg";
import pic5 from "../assets/5.jpg";
import pic6 from "../assets/6.jpg";
import pic7 from "../assets/7.jpg";
import pic8 from "../assets/8.jpg";
import calculateMatch from "../lib/calculateMatch";
import Cards from "./Cards";

const pics = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8];
const deckObj = generateDeck(pics);
export default function Deck() {
  const [memory, setMemory] = useState([]);

  function handleClick(picObj) {
    let counter = 0;
    console.log(picObj.id);
    if (counter <= 2) {
      counter++;
      setMemory([...memory, picObj.id]);
    } else {
      const match = calculateMatch(memory[0], memory[1]);
      console.log(match);
      setMemory([]);
    }
  }
  return (
    <DeckContainer>
      {deckObj.map((picObj, index) => (
        <Cards
          handleClick={() => handleClick(picObj)}
          imgSrc={picObj.src}
          key={index}
        />
      ))}
    </DeckContainer>
  );
}

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

  return result;
}

const DeckContainer = styled.div`
  display: grid;
  align-items: center;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
`;
