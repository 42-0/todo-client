import React from 'react';
import Routes from './routes';

/** @jsxImportSource @emotion/react */
import { jsx, css, Global } from '@emotion/react';
import { AppStyle, GlobalStyles } from './app.style';

const App = () => (
  <div css={AppStyle}>
    <Global styles={GlobalStyles} />
    <Routes />
  </div>
);

export default App;
