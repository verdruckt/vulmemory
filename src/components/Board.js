import styled from "styled-components/macro";

const Board = ({ children }) => {
  return <BoardContainer>{children}</BoardContainer>;
};
const BoardContainer = styled.div`
  background-color: rebeccapurple;
  /* width: 100%; */
  /* height: 800px; */
`;

export default Board;
