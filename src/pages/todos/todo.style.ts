import { css } from '@emotion/css';
import { colors } from '../../styles/color.style';

const todoHeader = css`
  align-items: center;
  flex: 1 1 100%;
  justify-content: center;
  box-sizing: content-box;
  height: 3.3rem;
  padding: 0.8rem 0 0 0;
`;

const todoTitle = css`
  font-weight: bold;
  font-size: 20pt;
  padding: 0 2.5rem;
  text-align: center;
  background-image: url("/images/ic_header_bar.svg");
  background-repeat: no-repeat;
  background-position: bottom 1.5rem center;
  background-size: 3rem 1.6rem;
`;

const todosStyle = css`
  padding: 3rem;
`;

export { todoHeader, todoTitle, todosStyle };
