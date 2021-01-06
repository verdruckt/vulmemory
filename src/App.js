import styled from "styled-components";
import Board from "./components/Board";
import React, { Fragment, useEffect, useState } from "react";

import Deck from "./components/Deck";
import GlobalStyle from "./GlobalStyles";
import Background from "./components/Background";
import Menu from "./components/Menu";
import { generateDeck, sleepFor } from "./lib/deckFunctions";
import pics from "./lib/getPics";

function App() {
  const [cardDeck, setCardDeck] = useState(generateDeck(pics));
  const [round, setRound] = useState(0);
  const [counter, setCounter] = useState(0);
  const [matchArr, setMatchArr] = useState([]);
  const [checked, setChecked] = useState([]);
  const [allMatched, setAllMatched] = useState([]);
  const [win, setWin] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

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
  const toggleTimer = () => {
    function toggle() {
      setIsActive(!isActive);
    }
    toggle();
  };
  const resetTimer = () => {
    function reset() {
      setSeconds(0);
      setIsActive(false);
    }
    reset();
  };

  const handleRestart = async () => {
    if (isActive) {
      toggleTimer();
      setMatchArr([]);
      setAllMatched([]);
      setChecked([]);
      resetCounter();
      await sleepFor(1000);
      setRound(0);
      setCardDeck(generateDeck(pics));
      resetTimer();
    }
  };

  const addCount = () => {
    setCounter(counter + 1);
  };
  const handleSeconds = (input) => {
    setSeconds(input);
  };
  const handleIsActive = (input) => {
    setIsActive(input);
  };
  return (
    <Fragment>
      <GlobalStyle />

      <Wrapper>
        <Menu
          round={round}
          handleRestart={handleRestart}
          seconds={seconds}
          handleSeconds={handleSeconds}
          isActive={isActive}
        />
        <Board>
          <Deck
            win={win}
            handleIsActive={handleIsActive}
            isActive={isActive}
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
