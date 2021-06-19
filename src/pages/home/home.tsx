import React from 'react';

// @ts-ignore
import { Link } from 'react-router-dom';
import { css } from '@emotion/css';

const Home = () => (
  <>
    <div className={css(css`padding: 5rem`)}>
      <div> home</div>
      <Link to="/todo">
        <button type="button">todo</button>
      </Link>
    </div>
    <div>
      <div>login</div>
      <Link to="/login">
        <button type="button">login</button>
      </Link>
    </div>
  </>
);

export default Home;
