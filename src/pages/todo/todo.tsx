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
import { todoList, todoWrapper } from './todo-list.style';

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
          {dayjs().format('MM.DD ddd')}
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

      <div className={css(todoWrapper)}>
        <div className={css(todoList)}>
          {todos?.map((value: ITodo, index: number) => (
            <div key={value.id}>
              {value.contents}
            </div>
          ))}
        </div>
      </div>

    </>
  );
};

export default Todo;
