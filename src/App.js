import styled from "styled-components";
import Board from "./components/Board";
import React, { Fragment, useEffect, useState } from "react";

import Deck from "./components/Deck";
import GlobalStyle from "./GlobalStyles";
import Background from "./components/Background";
import Menu from "./components/Menu";
import { generateDeck, sleepFor } from "./lib/deckFunctions";
import pic1 from "./assets/1.jpg";
import pic2 from "./assets/2.jpg";
import pic3 from "./assets/3.jpg";
import pic4 from "./assets/4.jpg";
import pic5 from "./assets/5.jpg";
import pic6 from "./assets/6.jpg";
import pic7 from "./assets/7.jpg";
import pic8 from "./assets/8.jpg";
import { waitFor } from "@testing-library/react";
const pics = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8];

function App() {
  const [cardDeck, setCardDeck] = useState(generateDeck(pics));
  const [round, setRound] = useState(0);
  const [counter, setCounter] = useState(0);
  console.log(cardDeck);
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

  const addRound = () => {
    setRound(round + 1);
  };
  const handleAllMatchedChange = (input) => {
    setAllMatched(input);
  };
  const handleCheckedChange = (input) => {
    setChecked(input);
  };
  const handleMatchArrChange = (input) => {
    setMatchArr(input);
  };
  const handleCardDeckChange = (input) => {
    setCardDeck(input);
  };
  const resetCounter = () => {
    setCounter(0);
  };
  const handleRestart = async () => {
    setMatchArr([]);
    setAllMatched([]);
    setChecked([]);
    resetCounter();
    await sleepFor(1000);
    setRound(0);
    setCardDeck(generateDeck(pics));
  };

  const addCount = () => {
    setCounter(counter + 1);
  };

  return (
    <Fragment>
      <GlobalStyle />

      <Wrapper>
        <Menu round={round} handleRestart={handleRestart} />
        <Board>
          <Deck
            win={win}
            matchArr={matchArr}
            handleMatchArrChange={handleMatchArrChange}
            checked={checked}
            handleCheckedChange={handleCheckedChange}
            allMatched={allMatched}
            handleAllMatchedChange={handleAllMatchedChange}
            cardDeck={cardDeck}
            handleCardDeckChange={handleCardDeckChange}
            addRound={addRound}
            counter={counter}
            addCount={addCount}
            resetCounter={resetCounter}
          />
        </Board>
      </Wrapper>
      <Background />
    </Fragment>
  );
}
const Wrapper = styled.div`
  height: 100%;
  min-height: 100vh;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export default App;
