import styled from "styled-components";
import Board from "./components/Board";
import React, { Fragment, useEffect, useState } from "react";

import Deck from "./components/Deck";
import GlobalStyle from "./GlobalStyles";
import Background from "./components/Background";
import Menu from "./components/Menu";
import { generateDeck, sleepFor } from "./lib/deckFunctions";
import pics from "./lib/getPics";
import { PLAYER1 } from "./lib/playerLogic";

function App() {
  const [cardDeck, setCardDeck] = useState(generateDeck(pics));
  const [round, setRound] = useState(0);
  const [counter, setCounter] = useState(0);
  const [matchArr, setMatchArr] = useState([]);
  const [checked, setChecked] = useState([]);
  const [allMatched, setAllMatched] = useState([]);
  const [win, setWin] = useState(false);
  const [seconds, setSeconds] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const [player, setPlayer] = useState(PLAYER1);
  const [player1Pairs, setPlayer1Pairs] = useState([]);
  const [player2Pairs, setPlayer2Pairs] = useState([]);

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

  const handleRestart = async () => {
    if (isActive) {
      toggleTimer();
      setMatchArr([]);
      setAllMatched([]);
      setChecked([]);
      resetCounter();
      await sleepFor(1000);
      setRound(0);
      setPlayer1Pairs([]);
      setPlayer2Pairs([]);
      setCardDeck(generateDeck(pics));
      setStartTime(null);
      setIsActive(false);
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

  const handlePlayerChange = (input) => {
    setPlayer(input);
  };
  const handlePlayer1Pairs = (input) => {
    setPlayer1Pairs(input);
  };
  const handlePlayer2Pairs = (input) => {
    setPlayer2Pairs(input);
  };
  const handleStartTime = (input) => {
    setStartTime(input);
  };
  return (
    <Fragment>
      <GlobalStyle />

      <Wrapper>
        <Title>Memory3000</Title>
        <Menu
          startTime={startTime}
          round={round}
          handleRestart={handleRestart}
          seconds={seconds}
          allMatched={allMatched}
          handleSeconds={handleSeconds}
          isActive={isActive}
          player={player}
          player1Pairs={player1Pairs}
          player2Pairs={player2Pairs}
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
            player={player}
            handlePlayerChange={handlePlayerChange}
            player1Pairs={player1Pairs}
            player2Pairs={player2Pairs}
            handlePlayer1Pairs={handlePlayer1Pairs}
            handlePlayer2Pairs={handlePlayer2Pairs}
            handleStartTime={handleStartTime}
            handleSeconds={handleSeconds}
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
const Title = styled.h1`
  color: white;
  padding: 0.5rem;
  margin: 0.5rem;
`;
export default App;
