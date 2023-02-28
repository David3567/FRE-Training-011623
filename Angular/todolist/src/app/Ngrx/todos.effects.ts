import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { Todo } from '../interfaces/todo.interface';

import * as TodoActions from './todos.actions';

@Injectable()
export class TodoEffects {
  private readonly baseUrl = 'https://jsonplaceholder.typicode.com';
  private readonly todoPath = 'todos';

  loadTodos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TodoActions.loadTodolist),
      mergeMap((payload: any) => {
        return this.http
          .get<Todo[]>([this.baseUrl, this.todoPath].join('/'))
          .pipe(
            map((todolist: Todo[]) => {
              return TodoActions.loadTodoSuccess({ todolist });
            }),
            catchError((err) => {
              return of(TodoActions.loadTodoFailure({ err }));
            })
          );
      })
    );
  });

  // deleteTodo$
  // addTodoTodo$

  constructor(private actions$: Actions, private http: HttpClient) {}
}
