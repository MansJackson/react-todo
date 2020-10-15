import { Dispatch } from 'redux';
import { ADD_TODO, REMOVE_TODO, SET_TEXT, TOGGLE_COMPLETED, TOGGLE_EDIT } from './types';

export const setFormTextAction = (text: string) => (dispatch: Dispatch) => {
  dispatch({
    type: SET_TEXT,
    payload: text,
  })
}

export const addTodoAction = (text: string) => (dispatch: Dispatch) => {
  dispatch({
    type: ADD_TODO,
    text,
  });
}

export const removeTodoAction = (id: number) => (dispatch: Dispatch) => {
  dispatch({
    type: REMOVE_TODO,
    id,
  });
}

export const toggleCompletedAction = (id: number) => (dispatch: Dispatch) => {
  dispatch({
    type: TOGGLE_COMPLETED,
    id,
  });
}

export const toggleEditAction = (id: number) => (dispatch: Dispatch) => {
  dispatch({
    type: TOGGLE_EDIT,
    id,
  });
}
