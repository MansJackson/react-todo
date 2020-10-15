export type Todo = {
  id: number;
  text: string;
  completed: boolean;
  edit: boolean;
};

// Actions
export type FormAction = {
  type: string;
  payload: string;
};

export type TodoAction = {
  type: string;
  payload?: Todo[];
  text?: string;
  id?: number;
};

export type NotificationAction = {
  type: string;
  payload: string;
};

// States
export type NotificationState = {
  show: boolean;
  text: string;
};

export type RootState = {
  formValue: string;
  todos: Todo[];
  notification: NotificationState;
};

// Props
export type TodoFormProps = {
  value: string;
  setValue: (text: string) => void;
  addTodo: (text: string) => void;
  notify: (text: string) => void;
};

export type BoardProps = {
  todos: Todo[];
};

export type CardProps = {
  data: Todo;
  toggleEdit: (id: number) => void;
  toggleCompleted: (id: number) => void;
  removeTodo: (id: number) => void;
  editText: (text: string, id: number) => void;
  notify: (text: string) => void;
};

export type NotificationProps = {
  notification: NotificationState;
};

// Action types
export const SET_TEXT = 'SET_TEXT';
export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';
export const TOGGLE_EDIT = 'TOGGLE_EDIT';
export const TOGGLE_SHOW = 'TOGGLE_SHOW';
export const SET_NOTIFICATION_TEXT = 'SET_NOTIFICATION_TEXT';
export const EDIT_TEXT = 'EDIT_TEXT';
