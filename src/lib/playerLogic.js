export const PLAYER1 = "Player 1";
export const PLAYER2 = "Player 2";

export const changePlayer = (actualPlayer) =>
  actualPlayer === PLAYER1 ? PLAYER2 : PLAYER1;
