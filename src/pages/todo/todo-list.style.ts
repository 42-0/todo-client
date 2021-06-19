import { css } from '@emotion/css';
import { colors } from '../../styles/color.style';

const todoWrapper = css`
  display: flex;
  flex: 0 0 81.25%;

  width: 100%;
  min-width: 18.4rem;
  max-width: 24.5rem;
  margin: 0 1.5rem 2rem;
  padding: 0.5rem 0 0.5rem 0;

  border-radius: 0 0 2.5rem 2.5rem;
  background-color: ${colors.gray3};
  box-shadow: 0 -1px 3rem rgba(0, 0, 0, 0.078);
`;

const todoList = css`
  display: flex;
  align-content: flex-start;
  flex: 1;
  flex-direction: column;

  &:empty {
    background-image: url(/images/ic_not_plane.svg);
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: 23.7rem, auto;
  }
`;

export {
  todoWrapper,
  todoList,
};
