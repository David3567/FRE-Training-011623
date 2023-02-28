import { TodoState } from './../interfaces/todo.interface';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const todoState = createFeatureSelector<TodoState>('todos');

export const getTodolist = createSelector(
  todoState,
  (state: TodoState) => state.todolist
);
