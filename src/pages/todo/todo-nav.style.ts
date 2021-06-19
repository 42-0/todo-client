import { css } from '@emotion/css';
import { colors } from '../../styles/color.style';

const todoFilterAll = css`
  position: relative;
  display: flex;
  align-items: center;
  flex: 1 1 80%;
  height: 2.7rem;
  width: 87%;
  left: 5.4%;
  margin: 3rem 0 0 0;
  border-radius: 2.5rem 2.5rem 0 0;
  background-color: ${colors.gray3};
`;

const todoFilterDone = css`
  background-image: url("/images/ic_checked_list.svg");
`;

const todoFilterShadow = css`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  border-radius: 5rem 5rem 0 0;
  box-shadow: 0 -1px 3rem rgba(0, 0, 0, 0.078);
`;

const todoFilterWrapper = css`
  display: flex;
  flex: 0 0 84.25%;

  max-width: 27.8rem;
  max-height: 2rem;
  margin: 1.8rem 1.5rem 2rem;
  //padding: 16.7rem 0 6rem 0;

  border-radius: 0 0 2rem 2rem;
  background-color: ${colors.gray3};
  box-shadow: 0 -1px 3rem rgba(0, 0, 0, 0.078);
  outline: none;
  border: 0;
  box-sizing: border-box;

`;
const todoFilterState = css`
  position: relative;
  flex: 0 0 3rem;

  height: 1.7rem;

  border: 2px solid ${colors.defalut};
  border-radius: 1.85rem;
  background-color: ${colors.gray3};

  &::after {
    position: absolute;
    z-index: 1;
    top: -0.2rem;
    left: -0.2rem;

    box-sizing: border-box;
    width: 2rem;
    height: 2rem;

    content: "";
    transform: translate(0, 0);

    border: 2px solid ${colors.defalut};
    border-radius: 50%;
    background-color: ${colors.lime};
    background-image: url("/images/ic_all.svg");
    background-repeat: no-repeat;
    background-position: center center;
  }
`;

const todoFilterAllButton = css`
  font-size: 0;
  flex: 1;

  outline: none;
  margin: 0;
  padding: 0;
  cursor: pointer;
  -webkit-user-select: none;
  user-select: none;
  letter-spacing: inherit;
  border: none;

  background-repeat: no-repeat;
  background-position: center;
  background-size: 1.25rem auto;
  background-color: ${colors.gray3};

  background-image: url("/images/ic_all_list.svg");
  //background-image: url("/images/ic_all_list_active.svg");

`;
const todoFilterCheckButton = css`
  font-size: 0;
  flex: 1;

  outline: none;
  margin: 0;
  padding: 0;
  cursor: pointer;
  -webkit-user-select: none;
  user-select: none;
  letter-spacing: inherit;
  border: none;

  background-repeat: no-repeat;
  background-position: center;
  background-size: 1.25rem auto;
  background-color: ${colors.gray3};
  background-image: url("/images/ic_checked_list.svg");
`;

export {
  todoFilterAll,
  todoFilterDone,
  todoFilterCheckButton,
  todoFilterState,
  todoFilterWrapper,
  todoFilterAllButton,
  todoFilterShadow,
};
