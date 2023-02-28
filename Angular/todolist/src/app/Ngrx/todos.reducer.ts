import { TodoState } from './../interfaces/todo.interface';
import { createReducer, on } from '@ngrx/store';
import * as TodoActions from './todos.actions';

const todoState: TodoState = {
  todolist: [
    {
      userId: 1,
      id: 1,
      title: 'delectus aut autem',
      completed: false,
    },
    {
      userId: 1,
      id: 2,
      title: 'quis ut nam facilis et officia qui',
      completed: false,
    },
    {
      userId: 1,
      id: 3,
      title: 'fugiat veniam minus',
      completed: false,
    },
    {
      userId: 1,
      id: 4,
      title: 'et porro tempora',
      completed: true,
    },
  ],
  err: '',
};

export const todoReducer = createReducer(
  todoState,
  // on(TodoActions.initTodolist, (state) => {
  //   const newtodo = {
  //     ...state.todolist[0],
  //     title: 'Hello World',
  //   };
  //   return {
  //     ...state,
  //     todolist: [newtodo, ...state.todolist.slice(1)],
  //   }; // slice & splice
  // })
  on(TodoActions.loadTodoSuccess, (state, { todolist }) => {
    return {
      ...state,
      todolist,
    };
  }),
  on(TodoActions.loadTodoFailure, (state, { err }) => {
    return {
      ...state,
      err,
    };
  })
);
