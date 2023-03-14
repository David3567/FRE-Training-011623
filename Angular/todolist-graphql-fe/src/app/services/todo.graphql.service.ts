import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AddTodoGQL, GetTodosGQL, Todo } from './todoGraphql.service';

const DELETE_TODO = gql`
  mutation DeleteTodo($input: Int!) {
    deleteTodo(input: {id: $input}) {
      todo {
        id
      }
    }
  }
`

@Injectable({ providedIn: 'root' })
export class TodoGraphqlService {
  private todolist: Todo[] = [];
  private todolistSub$ = new BehaviorSubject(this.todolist);
  todolist$ = this.todolistSub$.asObservable();

  constructor(
    private readonly addtodoGql: AddTodoGQL,
    private readonly getTodosGQL: GetTodosGQL,
    private readonly http: HttpClient,
    private readonly apollo: Apollo
  ) { }

  getTodos() {
    return this.getTodosGQL.fetch()
      .pipe(
        tap((gqldata) => {
          const todos = gqldata.data.getTodos.todos as Todo[]
          this.todolist = [...todos].reverse();
          this.todolistSub$.next(this.todolist);
        })
      );
  }
  addTodo(todo: Todo) {
    return this.addtodoGql
      .mutate({
        addTodoInput: todo,
      })
      .pipe(
        tap((gqldata) => {
          const todo = gqldata.data?.addTodo.todo as Todo;
          this.todolist = [todo, ...this.todolist];
          this.todolistSub$.next(this.todolist);
        })
      );
  }
  deleteTodo(id: string) {
    console.log(id);
    return this.apollo.mutate({
      mutation: DELETE_TODO,
      variables: {
        input: +id
      }
    }).pipe(
      tap((gqldata) => {
        console.log(gqldata);
        // this.todolist = this.todolist.filter((todo: any) => +todo.id !== +id);
        // this.todolistSub$.next(this.todolist);
      })
    )
  }
}
