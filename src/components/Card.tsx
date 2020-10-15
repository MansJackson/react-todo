// eslint-disable-next-line
import React from 'react';
import { connect } from 'react-redux';
import {
  editTextAction, notifyAction, removeTodoAction, toggleCompletedAction, toggleEditAction,
} from '../actions';
import { CardProps, RootState, Todo } from '../types';

const Card: React.FunctionComponent<CardProps> = (props): JSX.Element => {
  const {
    data, toggleEdit, toggleCompleted, removeTodo, editText, notify,
  } = props;

  const handleSubmitt = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!data.text || data.text === '') {
      notify('Field can not be empty');
      return;
    }
    toggleEdit(data.id);
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (
      (e.target as HTMLDivElement).classList.contains('todo_icon')
      || data.edit
    ) return;
    toggleCompleted(data.id);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === 'Enter') {
      switch ((e.target as HTMLElement).id) {
        case 'edit':
          toggleEdit(data.id);
          break;
        case 'remove':
          removeTodo(data.id);
          break;
        case 'save':
          toggleEdit(data.id);
          break;
        default:
          if (data.edit) return;
          toggleCompleted(data.id);
      }
    }
  };

  return (
    <>
      <div
        className={data.completed
          ? 'todo completed_container'
          : 'todo'}
        onClick={handleClick}
        onKeyPress={handleKeyPress}
        role="button"
        tabIndex={0}
      >

        {!data.edit
          ? (
            <p
              className={
                data.completed
                  ? 'todo_text completed_text'
                  : 'todo_text'
              }
            >
              {data.text}
            </p>
          )
          : (
            <form onSubmit={handleSubmitt}>
              <input
                value={data.text}
                onChange={(e) => { editText(e.target.value, data.id); }}
                className="todo_edit_input"
              />
            </form>
          )}

        {!data.edit && !data.completed
          ? (
            <i
              id="edit"
              className="fas fa-cog todo_icon todo_edit"
              onKeyPress={() => { }}
              onClick={() => toggleEdit(data.id)}
              role="button"
              aria-label="edit todo"
              tabIndex={0}
            />
          )
          : null}
        {data.completed
          ? (
            <i
              id="remove"
              className="fas fa-times todo_icon todo_remove"
              onKeyPress={() => { }}
              onClick={() => removeTodo(data.id)}
              role="button"
              aria-label="remove todo"
              tabIndex={0}
            />
          )
          : null}
        {data.edit
          ? (
            <i
              id="save"
              className="fas fa-check todo_icon todo_save"
              onKeyPress={() => { }}
              onClick={() => toggleEdit(data.id)}
              role="button"
              aria-label="save todo"
              tabIndex={0}
            />
          )
          : null}
      </div>
    </>
  );
};

const mapStateToProps = (state: RootState, ownProps: { data: Todo }) => ({
  data: ownProps.data,
});

export default connect(mapStateToProps, {
  toggleEdit: toggleEditAction,
  toggleCompleted: toggleCompletedAction,
  removeTodo: removeTodoAction,
  editText: editTextAction,
  notify: notifyAction,
})(Card);
