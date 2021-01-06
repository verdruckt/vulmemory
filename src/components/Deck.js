import React from "react";
import styled from "styled-components/macro";

import calculateMatch from "../lib/calculateMatch";
import Cards from "./Cards";
import { checkForAinB, sleepFor } from "../lib/deckFunctions";

export default function Deck({
  cardDeck,
  handleCardDeckChange,
  isActive,
  handleIsActive,
  addRound,
  addCount,
  counter,
  resetCounter,
  matchArr,
  checked,
  allMatched,
  win,
  handleMatchArrChange,
  handleAllMatchedChange,
  handleCheckedChange,
}) {
  const deckWithReverseClick = (picObj) => {
    return cardDeck.map((card) => {
      if (card.uid === picObj.uid) {
        card.clicked = !card.clicked;
      }
      return card;
    });
  };

  async function handleClick(picObj) {
    if (!isActive) {
      handleIsActive(true);
    }
    handleMatchArrChange([...matchArr, picObj.id]);
    addCount();

    if (!checkForAinB(picObj.uid, checked)) {
      handleCheckedChange([...checked, picObj.uid]);
    } else {
      handleCheckedChange(checked.filter((item) => item !== picObj.uid));
    }
    if (counter === 0) {
      handleCardDeckChange(deckWithReverseClick(picObj));
    }

    if (counter === 1) {
      const match = calculateMatch(matchArr[0], picObj.id);
      if (match) {
        handleAllMatchedChange([...allMatched, picObj.id]);
      }
      handleMatchArrChange([]);

      await sleepFor(1000);
      addRound();
      resetCounter();
      handleCheckedChange([]);
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
