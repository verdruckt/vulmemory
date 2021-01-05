import React, { useState } from "react";
import styled from "styled-components/macro";
import pic1 from "../assets/1.jpg";
import pic2 from "../assets/2.jpg";
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
  const [memoryDeck, setMemoryDeck] = useState(deckObj);
  const [matchArr, setMatchArr] = useState([]);
  const [counter, setCounter] = useState(0);
  const [checked, setChecked] = useState([]);

  async function handleClick(picObj) {
    setMatchArr([...matchArr, picObj.id]);
    if (checked.indexOf(picObj.uid) === -1) {
      setChecked([...checked, picObj.uid]);
    } else {
      setChecked(checked.filter((item) => item !== picObj.uid));
    }
    if (counter === 0) {
      setMemoryDeck([...memoryDeck, !picObj.clicked]);
      setCounter(counter + 1);
    }

    if (counter === 1) {
      const match = calculateMatch(matchArr[0], matchArr[1]);
      console.log({ match });
      setCounter(0);
      setMatchArr([]);
      await sleep(1000);
      setChecked([]);
    }
    console.log({ memoryDeck });
  }

  return (
    <DeckContainer>
      {deckObj.map((picObj, index) => (
        <Cards
          handleClick={() => handleClick(picObj)}
          imgSrc={picObj.src}
          key={index}
          checked={checked}
          picObj={picObj}
        />
      ))}
    </DeckContainer>
  );
}
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

function generateDeck(cardArray) {
  const halfArr = cardArray.map((img, id) => ({
    id,
    src: img,
    clicked: false,
    match: false,
  }));

  const objArr = [...halfArr, ...halfArr];
  const result = objArr.map((obj) => ({
    ...obj,
    uid: Math.floor(Math.random() * 9999),
  }));
  //   console.log(result);
  return randomize(result);
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
