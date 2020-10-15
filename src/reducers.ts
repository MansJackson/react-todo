import { combineReducers } from 'redux';
import {
  FormAction,
  Todo,
  TodoAction,
  SET_TEXT,
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_COMPLETED,
  TOGGLE_EDIT,
  EDIT_TEXT,
} from './types';

const ls = window.localStorage.getItem('todos');
const todosLS: Todo[] = ls ? JSON.parse(ls) as Todo[] : [];
const initalFormState = '';
const initialTodoState: Todo[] = todosLS;

const formReducer = (state = initalFormState, action: FormAction) => {
  switch (action.type) {
    case SET_TEXT:
      return action.payload;
    default:
      return state;
  }
};

const todoReducer = (state = initialTodoState, action: TodoAction) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        {
          id: state.length ? state[0].id + 1 : 1,
          text: action.text,
          completed: false,
          edit: false,
        },
        ...state,
      ];
    case REMOVE_TODO:
      return state.filter((el) => el.id !== action.id);
    case TOGGLE_COMPLETED:
      return state.map((el) => (el.id !== action.id ? el : { ...el, completed: !el.completed }));
    case TOGGLE_EDIT:
      return state.map((el) => (el.id !== action.id ? el : { ...el, edit: !el.edit }));
    case EDIT_TEXT:
      return state.map((el) => (el.id !== action.id ? el : { ...el, text: action.text }));
    default:
      return state;
  }
};

export default combineReducers({
  formValue: formReducer,
  todos: todoReducer,
});
