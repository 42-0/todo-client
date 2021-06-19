import { css } from '@emotion/css';
import { colors } from '../../styles/color.style';

const todoHeader = css`
  align-items: center;
  flex: 1 1 100%;
  justify-content: center;
  box-sizing: content-box;
  height: 3.3rem;
  padding: 0.3rem 0 0 0;
`;

const todoTitle = css`
  font-weight: bold;
  font-size: 20pt;
  padding: 0 2.5rem;
  text-align: center;
  margin: 0.5rem;
  background-image: url("/images/ic_header_bar.svg");
  background-repeat: no-repeat;
  background-position: bottom 1.5rem center;
  background-size: 3rem 1.6rem;
`;

const todoSubmit = css`
  flex: 1 1 100%;
  margin: 0.3rem 0 0 0.5rem;
`;

const todoInput = css`
  font-size: 1.3rem;
  flex: 1;
  height: 0.8rem;
  width: 20.5rem;
  padding: 0.8rem 1.5rem 0.8rem 2.5rem;
  margin: 0 0 0 0.8rem;
  text-align: left;
  letter-spacing: -1px;
  border-radius: 2.75rem;
  background-color: ${colors.gray3};
  color: ${colors.tertiary};
  box-shadow: none;
  border: 1px solid ${colors.gray3};

  &:focus {
    outline: none;
    border: 1px solid ${colors.lime};
  }

  &::placeholder {
    color: ${colors.secondary};
  }
`;

const todoSubmitButton = css`
  font-size: 0;
  position: relative;
  z-index: 1;
  top: 1.75rem;
  right: 2.4rem;
  cursor: pointer;
  width: 1.9rem;
  height: 1.9rem;

  transform: translate(0, -2.2rem);
  border: 2px solid ${colors.defalut};
  border-radius: 50%;
  background-color: ${colors.lime};
  background-image: url("/images/ic_plus.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 1.4rem 1.1rem;
`;

export {
  todoHeader,
  todoTitle,
  todoSubmit,
  todoInput,
  todoSubmitButton,
};
