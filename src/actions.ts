import { Dispatch } from 'redux';
import {
  ADD_TODO,
  EDIT_TEXT,
  REMOVE_TODO,
  SET_NOTIFICATION_TEXT,
  SET_TEXT,
  TOGGLE_COMPLETED,
  TOGGLE_EDIT,
  TOGGLE_SHOW,
} from './types';

export const setFormTextAction = (text: string) => (dispatch: Dispatch): void => {
  dispatch({
    type: SET_TEXT,
    payload: text,
  });
};

export const addTodoAction = (text: string) => (dispatch: Dispatch): void => {
  dispatch({
    type: ADD_TODO,
    text,
  });
};

export const removeTodoAction = (id: number) => (dispatch: Dispatch): void => {
  dispatch({
    type: REMOVE_TODO,
    id,
  });
};

export const toggleCompletedAction = (id: number) => (dispatch: Dispatch): void => {
  dispatch({
    type: TOGGLE_COMPLETED,
    id,
  });
};

export const toggleEditAction = (id: number) => (dispatch: Dispatch): void => {
  dispatch({
    type: TOGGLE_EDIT,
    id,
  });
};

export const editTextAction = (text: string, id: number) => (dispatch: Dispatch): void => {
  dispatch({
    type: EDIT_TEXT,
    text,
    id,
  });
};

export const notifyAction = (text: string) => (dispatch: Dispatch): void => {
  const duration = 3000;
  dispatch({
    type: SET_NOTIFICATION_TEXT,
    payload: text,
  });
  dispatch({
    type: TOGGLE_SHOW,
  });
  setTimeout(() => {
    dispatch({
      type: TOGGLE_SHOW,
    });
  }, duration);
};
