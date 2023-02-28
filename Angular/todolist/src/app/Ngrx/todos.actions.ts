import { createAction, props } from '@ngrx/store';
import { Todo } from '../interfaces/todo.interface';

// export const initTodolist = createAction('[ Todos ] Initalize Todolist');

export const loadTodolist = createAction('[ Todos ] Load Todolist');

//* ~~~~~~~~~~~~~~~~~~~ Load TodoList from backend;
export const loadTodoSuccess = createAction(
  '[ Todos ] Load Todolist Success',
  props<{ todolist: Todo[] }>()
);
export const loadTodoFailure = createAction(
  '[ Todos ] Load Todolist Failure',
  props<{ err: string }>()
);
