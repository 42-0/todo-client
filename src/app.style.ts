import { css } from '@emotion/react';
import { color } from './styles/color.style';

const AppStyle = css`
  text-align: center;
  //height: 100% !important;
  //width: 100% !important;
  min-height: 600px;
  min-width: 450px;
  background-color: #282c34;
`;

const GlobalStyles = css`
  @import url("https://fonts.googleapis.com/css2?family=Bellota:wght@700&display=swap");

  @font-face {
    font-family: "맑음 고딕", "Malgun Gothic", -apple-system, sans-serif;
  }
  * {
    text-align: center;
  }

  body {
    font-weight: 400;
    //font-family: "맑음 고딕", "Malgun Gothic", -apple-system, sans-serif;
    color: ${color.tertiary};
    background-color: ${color.background};
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

export { AppStyle, GlobalStyles };
