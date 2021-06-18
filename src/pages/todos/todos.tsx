import React, { ChangeEvent, FormEvent, useState } from 'react';
import ITodos from './todos.model';
import { todoHeader, todosStyle, todoTitle } from './todo.style';
import { css } from '@emotion/css';
import dayjs from '../../plugins/dayJs';

const Todos = () => {
  const [inputText, setInputText] = useState<string>('');
  const [todos, setTodos] = useState<ITodos[]>([]);

  const onSubmitTodo = (event: FormEvent) => {
    event.preventDefault();

    const newTodo: ITodos = {
      id: dayjs().valueOf(),
      sequence: dayjs().valueOf(),
      isChecked: false,
      contents: inputText,
      createAt: dayjs().toISOString(),
      userId: 1,
    };

    setTodos([...todos, newTodo]);
    setInputText('');
  };

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  return (
    <>
      <header className={css(todoHeader)}>
        <h1 className={css(todoTitle)}>
          {dayjs().format('MM.DD ddd')}
        </h1>
        <form onSubmit={onSubmitTodo}>
          <input
            type="text"
            placeholder="NEW TODO"
            value={inputText}
            onChange={onChangeInput}
          />
          <button type="submit">
            등록
          </button>
        </form>
      </header>

      <div className={css(todosStyle)}>
        {todos?.map((value: ITodos, index: number) => (
          <div key={value.id}>
            {value.contents}
          </div>
        ))}
      </div>

    </>
  );
};

export default Todos;
