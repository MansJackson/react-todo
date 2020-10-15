// eslint-disable-next-line
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { BoardProps, RootState } from '../types';
import Card from './Card';

const Board: React.FunctionComponent<BoardProps> = (props): JSX.Element => {
  const { todos } = props;

  useEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="todo_container">
      {todos.map((el) => <Card key={el.id} data={el} />)}
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  todos: state.todos,
});

export default connect(mapStateToProps, {})(Board);
