import React from 'react';
import { connect } from 'react-redux';
import { CardProps, RootState, Todo } from '../types';

const Card: React.FunctionComponent<CardProps> = (props): JSX.Element => {
  const { data } = props;

  return (
    <div className={data.completed ? 'todo completed_container' : 'todo'}>
      <p className={data.completed ? 'todo_text completed_text' : 'todo_text'}>{data.text}</p>
    </div>
  );
}

const mapStateToProps = (state: RootState, ownProps: { data: Todo }) => ({
  data: ownProps.data
});

export default connect(mapStateToProps, {})(Card);