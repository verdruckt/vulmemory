import React from "react";
import styled from "styled-components/macro";

import calculateMatch from "../lib/calculateMatch";
import Cards from "./Cards";
import { checkForAinB, sleepFor } from "../lib/deckFunctions";
import { changePlayer, PLAYER1, PLAYER2 } from "../lib/playerLogic";

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
  player,
  handleMatchArrChange,
  handleAllMatchedChange,
  handleCheckedChange,
  handlePlayerChange,
  player1Pairs,
  player2Pairs,
  handlePlayer1Pairs,
  handlePlayer2Pairs,
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
        if (player === PLAYER1) {
          handlePlayer1Pairs([...player1Pairs, picObj.id]);
        } else {
          handlePlayer2Pairs([...player2Pairs, picObj.id]);
        }
      }
      handleMatchArrChange([]);

      await sleepFor(1000);
      addRound();
      resetCounter();
      if (!match) {
        handlePlayerChange(changePlayer(player));
      }
      handleCheckedChange([]);
    }
  }
  const winner = () => {
    if (player1Pairs.length === player2Pairs.length) {
      return "This is a draw";
    }
    if (player1Pairs.length > player2Pairs.length) {
      return PLAYER1;
    } else {
      return PLAYER2;
    }
  };
  return (
    <DeckContainer>
      {win && (
        <WinnerScreen>
          <h3>{winner()} won!!</h3>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/qvIcny1DFjY?controls=0"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            title="video"
          ></iframe>
        </WinnerScreen>
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
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
`;
const WinnerScreen = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
