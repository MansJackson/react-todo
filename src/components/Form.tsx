// eslint-disable-next-line
import React from 'react';
import { connect } from 'react-redux';
import { addTodoAction, notifyAction, setFormTextAction } from '../actions';
import { RootState, TodoFormProps } from '../types';

const TodoForm: React.FunctionComponent<TodoFormProps> = (props): JSX.Element => {
  const {
    value, setValue, addTodo, notify,
  } = props;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!value || value === '') {
      notify('Fiel can not be empty');
      return;
    }
    addTodo(value);
    setValue('');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="addtodo_form">
      <input
        className="addtodo_input"
        value={value}
        type="text"
        autoComplete="off"
        placeholder="New Todo"
        onChange={handleChange}
      />
    </form>
  );
};

const mapStateToProps = (state: RootState) => ({
  value: state.formValue,
});

export default connect(mapStateToProps, {
  setValue: setFormTextAction,
  addTodo: addTodoAction,
  notify: notifyAction,
})(TodoForm);
