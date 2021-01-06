import styled from "styled-components";
import Board from "./components/Board";
import React, { Fragment } from "react";

import Deck from "./components/Deck";
import GlobalStyle from "./GlobalStyles";
import Background from "./components/Background";
import Menu from "./components/Menu";

function App() {
  return (
    <Fragment>
      <GlobalStyle />

      <Wrapper>
        <Menu />
        <Board>
          <Deck></Deck>
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
