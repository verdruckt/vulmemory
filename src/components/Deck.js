import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";
import pic2 from "../assets/2.jpg";
import pic3 from "../assets/3.jpg";
import pic1 from "../assets/1.jpg";
import pic4 from "../assets/4.jpg";
import pic5 from "../assets/5.jpg";
import pic6 from "../assets/6.jpg";
import pic7 from "../assets/7.jpg";
import pic8 from "../assets/8.jpg";
import calculateMatch from "../lib/calculateMatch";
import Cards from "./Cards";
import { checkForAinB, generateDeck, sleepFor } from "../lib/deckFunctions";

const pics = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8];

export default function Deck() {
  const [counter, setCounter] = useState(0);
  const [cardDeck, setCardDeck] = useState(generateDeck(pics));
  const [matchArr, setMatchArr] = useState([]);
  const [checked, setChecked] = useState([]);
  const [allMatched, setAllMatched] = useState([]);
  const [win, setWin] = useState(false);

  useEffect(() => {
    function calculateWin(cardDeck) {
      let winCounter = 0;
      cardDeck.forEach((item) => {
        if (allMatched.indexOf(item.id) !== -1) {
          winCounter++;
        }
      });
      if (winCounter === cardDeck.length) {
        setWin(true);
        return true;
      }
      setWin(false);
      return false;
    }
    calculateWin(cardDeck);
  }, [cardDeck, allMatched]);

  const deckWithReverseClick = (picObj) => {
    return cardDeck.map((card) => {
      if (card.uid === picObj.ui) {
        card.clicked = !card.clicked;
      }
      return card;
    });
  };
  async function handleClick(picObj) {
    setMatchArr([...matchArr, picObj.id]);
    setCounter(counter + 1);

    if (!checkForAinB(picObj.uid, checked)) {
      setChecked([...checked, picObj.uid]);
    } else {
      setChecked(checked.filter((item) => item !== picObj.uid));
    }
    if (counter === 0) {
      setCardDeck(deckWithReverseClick(picObj));
    }

    if (counter === 1) {
      const match = calculateMatch(matchArr[0], picObj.id);
      if (match) {
        setAllMatched([...allMatched, picObj.id]);
      }
      setMatchArr([]);

      await sleepFor(1000);
      setCounter(0);
      setChecked([]);
    }
  }
  return (
    <DeckContainer>
      {win && (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/qvIcny1DFjY?controls=0"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          title="video"
        ></iframe>
      )}
      {!win &&
        cardDeck.map((picObj, index) => (
          <Cards
            handleClick={() => handleClick(picObj)}
            imgSrc={picObj.src}
            key={index}
            checked={checked}
            picObj={picObj}
            matched={allMatched}
            disabled={checkForAinB(picObj.uid, checked) || counter >= 2}
          />
        ))}
    </DeckContainer>
  );
}

const DeckContainer = styled.div`
  display: grid;
  align-items: center;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
`;
