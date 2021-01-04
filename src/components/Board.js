import styled from "styled-components/macro";

const Board = ({ children }) => {
  return <BoardContainer>{children}</BoardContainer>;
};
const BoardContainer = styled.div`
  max-width: 1200px;
  min-width: 200px;
`;

export default Board;
