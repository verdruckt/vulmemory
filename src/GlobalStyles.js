import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root{
  --color-primary: #A226AB;
  --background-color: #0A122A;
  --card-color: #A9B4C2;
  --card-color-2: #F9DB6D;
  --border-color: red;
}
  body {
    margin: 0;
    padding: 0;
    background:var(--background-color);
    box-sizing: border-box;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;

export default GlobalStyle;
