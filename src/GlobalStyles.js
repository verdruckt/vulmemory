import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: rgb(131,58,180);
    background: #f953c6;
    background: -webkit-linear-gradient(to bottom, #b91d73, #f953c6);
    background: linear-gradient(to bottom, #b91d73, #f953c6);

    box-sizing: border-box;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;

export default GlobalStyle;
