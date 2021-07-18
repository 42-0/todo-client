import { css } from '@emotion/css';
import { colors } from '../../styles/color.style';

const todoListWrapper = css`
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
const todoListMain = css`
  display: flex;
  flex: 0 0 100%;

  transition: background 0.3s ease-in-out;

`;

const todoListSlider = css`

`;
const todoListMainStatus = css`
  display: flex;
  align-items: center;
  flex: 0 0 0 0.5rem;
  justify-content: center;
  margin: 0.5rem;
  //background-color: aqua;
`;
const todoListMainContent = css`
  display: flex;
  //flex: 1 1;
  flex-direction: column;
  justify-content: center;

  padding: 0.5rem 0 0.5rem 0;

  word-break: break-all;

`;
const todoListMainPrefix = css`
  font-size: 0.8rem;
  letter-spacing: -1.05px;
  color: #c2c2c2;
`;
const todoListMainTitle = css`
  font-size: 1.2rem;

  margin: 0.5rem 0 0;

  letter-spacing: -1.35px;

  color: #333;

`;
const todoListMainEtc = css`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 10rem;

`;

const todoListMainCheckbox = css`
  //display: none;
  width: 1.4rem;
  height: 1.2rem;

  &:checked {
      //content: "";
      //display: inline-block;

      //background-image: url(/images/ic_checked.svg);
      //background-color: aqua;
      //background-repeat: no-repeat;
      //background-position: 50%;
      //background-size: 100% 100%;
  }
`;

export {
  todoList,
  todoListWrapper,
  todoListMain,
  todoListMainContent,
  todoListMainEtc,
  todoListMainPrefix,
  todoListMainStatus,
  todoListMainTitle,
  todoListSlider,
  todoListMainCheckbox,
};
