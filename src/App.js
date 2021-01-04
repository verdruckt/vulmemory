import styled from "styled-components";
import Board from "./components/Board";
import React, { Fragment } from "react";

import Deck from "./components/Deck";
import GlobalStyle from "./GlobalStyles";

function App() {
  return (
    <Fragment>
      <GlobalStyle />

      <Wrapper>
        <Board>
          <Deck></Deck>
        </Board>
      </Wrapper>
    </Fragment>
  );
}
const Wrapper = styled.div`
  height: 100%;
  min-height: 100vh;
  margin: 1rem;
  display: grid;
  align-items: center;
`;
export default App;
