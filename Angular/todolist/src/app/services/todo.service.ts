import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Todo } from '../interfaces/todo.interface';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private readonly baseUrl = 'https://jsonplaceholder.typicode.com';
  private readonly todoPath = 'todos';

  todos: Todo[] = [];
  todosSubject$: Subject<Todo[]> = new Subject();

  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>([this.baseUrl, this.todoPath].join('/')).pipe(
      tap((todolist: Todo[]) => {
        this.todos = todolist;
        this.todosSubject$.next(this.todos);
      })
    );
  }
  deleteTodo(id: number) {
    this.todos = this.todos.filter((ele) => (ele.id ? +ele.id !== +id : false));
    this.todosSubject$.next(this.todos);

    return this.http.delete([this.baseUrl, this.todoPath, id].join('/'));
  }
}
