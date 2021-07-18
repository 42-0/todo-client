import React, { ChangeEvent, FormEvent, useState } from 'react';
import ITodo from './todo.model';
import { css } from '@emotion/css';
// @ts-ignore
import { Link } from 'react-router-dom';
import dayjs from '../../plugins/dayJs';
import {
  todoHeader, todoInput, todoSubmit, todoSubmitButton, todoTitle,
} from './todo-header.style';
import {
  todoFilterAll,
  todoFilterAllButton,
  todoFilterCheckButton, todoFilterShadow,
  todoFilterState,
  todoFilterWrapper,
} from './todo-nav.style';
import {
  todoList, todoListMain,
  todoListMainCheckbox,
  todoListMainContent, todoListMainPrefix,
  todoListMainStatus, todoListMainTitle,
  todoListWrapper,
} from './todo-list.style';
import { getDateTime, getDayOfWeekColor } from '../../utils/date.util';

const Todo = () => {
  const [inputText, setInputText] = useState<string>('');
  const [todos, setTodos] = useState<ITodo[]>([]);

  const onSubmitTodo = (event: FormEvent) => {
    event.preventDefault();

    const todo: ITodo = {
      id: dayjs().valueOf(),
      sequence: dayjs().valueOf(),
      isChecked: false,
      contents: inputText,
      createAt: dayjs().toISOString(),
      userId: 1,
    };

    setTodos([...todos, todo]);
    setInputText('');
  };

  const onChangeInputText = (event: ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  return (
    <>
      {/* <div className={css(css`padding: 0.4rem`)}> */}
      {/*  <Link to="/"> */}
      {/*    <button type="button">home</button> */}
      {/*  </Link> */}
      {/* </div> */}

      <header className={css(todoHeader)}>
        <h1 className={css(todoTitle)}>
          {dayjs().format('MM.DD')}
          {' '}
          <span className={css`color: ${getDayOfWeekColor(dayjs().toISOString())}`}>
            {dayjs().format('ddd')}
          </span>
        </h1>
        <form
          className={css(todoSubmit)}
          onSubmit={onSubmitTodo}
        >
          <input
            className={css(todoInput)}
            type="text"
            placeholder="NEW TODO"
            value={inputText}
            onChange={onChangeInputText}
          />
          <button className={css(todoSubmitButton)} type="submit">
            등록
          </button>
        </form>
      </header>

      <nav className={css(todoFilterAll)}>
        <div className={css(todoFilterShadow)} />
        <div className={css(todoFilterWrapper)}>
          <button type="button" className={css(todoFilterAllButton)}>
            전체 목록
          </button>
          <div className={css(todoFilterState)} />
          <button
            type="button"
            className={css(todoFilterCheckButton)}
          >
            완료된 목록
          </button>
        </div>
      </nav>

      <div className={css(todoListWrapper)}>
        <div className={css(todoList)}>
          {todos?.filter((value: ITodo) => !value.isChecked)
            .map((value: ITodo, index: number) => (
              <div
                key={value.id}
                className={css(todoListMain)}
              >
                <div className={css(todoListMainStatus)}>
                  <input
                    className={css(todoListMainCheckbox)}
                    type="checkbox"
                  />
                </div>

                <div className={css(todoListMainContent)}>
                  <div className={css(todoListMainPrefix)}>
                    {getDateTime(value.createAt)}
                  </div>
                  <h2 className={css(todoListMainTitle)}>
                    {value.contents}
                  </h2>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Todo;
