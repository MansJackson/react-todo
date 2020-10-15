export type Todo = {
  id: number;
  text: string;
  completed: boolean;
  edit: boolean;
}

// Actions
export type FormAction = {
  type: string;
  payload: string;
}

export type TodoAction = {
  type: string;
  text?: string;
  id?: number;
}

// Props
export type TodoFormProps = {
  value: string;
  setValue: (text: string) => void;
  addTodo: (text: string) => void;
}

export type BoardProps = {
  todos: Todo[];
}

export type CardProps = {
  data: Todo;
}

export type RootState = {
  formValue: string;
  todos: Todo[];
}

// Action types
export const SET_TEXT = 'SET_TEXT';
export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';
export const TOGGLE_EDIT = 'TOGGLE_EDIT';
