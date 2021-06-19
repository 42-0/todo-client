import { css } from '@emotion/react';
import { colors } from './color.style';

const GlobalStyles = css`
  @import url("https://fonts.googleapis.com/css2?family=Bellota:wght@700&display=swap");

  @font-face {
    font-family: "Malgun Gothic", -apple-system, sans-serif;
    //font-family: "Bellota", -apple-system, sans-serif;
  }

  * {
    //text-align: center;
  }

  body {
    font-weight: 400;
    font-family: "Malgun Gothic", -apple-system, sans-serif;
    color: ${colors.tertiary};
    background-color: ${colors.background};
    display: flex;
    flex: 1;
    letter-spacing: -0.025rem;

    width: 100%;
    height: 100%;
    min-height: 100%;
    padding: 0;
    margin: 0;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export { GlobalStyles };
