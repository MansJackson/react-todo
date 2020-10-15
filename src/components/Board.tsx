import React from 'react';
import { connect } from 'react-redux';
import { BoardProps, RootState } from '../types';
import Card from './Card';

const Board: React.FunctionComponent<BoardProps> = (props): JSX.Element => {
  const { todos } = props;

  return (
    <div className="todo_container">
      {todos.map(el => <Card key={el.id} data={el}/>)}
    </div>
  );
}

const mapStateToProps = (state: RootState) => ({
  todos: state.todos
});

export default connect(mapStateToProps, {})(Board);