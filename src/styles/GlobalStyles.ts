import * as styled from "styled-components";
import { darkYellow } from "../utils/theme/colors";

const GlobalStyles = styled.createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: Inter;
    font-weight: 400;
    font-style: normal;
    line-height: 1.5em;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }

  ul {
    padding: 0;
    list-style: none;
  }

  input,
  textarea,
  select {
    border: 1px solid;
    outline: none;

    &:focus {
      border: 1px solid ${darkYellow};
    }
  }
`;

export default GlobalStyles;
