import styled from "styled-components";
import Board from "./components/Board";

import Deck from "./components/Deck";

function App() {
  return (
    <Wrapper>
      <Board>
        <Deck></Deck>
      </Board>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  height: 100%;
  min-height: 100vh;
  display: grid;
  align-items: center;
`;
export default App;
