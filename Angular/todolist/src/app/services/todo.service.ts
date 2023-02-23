import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, Subject, throwError } from 'rxjs';
import { Todo } from '../interfaces/todo.interface';
import { tap, catchError } from 'rxjs/operators';
import { BaseUrl } from '../app.module';

@Injectable()
export class TodoService {
  // private readonly baseUrl = 'https://jsonplaceholder.typicode.com';
  private readonly todoPath = 'todos';

  private todos: Todo[] = [];
  private todosSubject$: Subject<Todo[]> = new Subject();
  todos$ = this.todosSubject$.asObservable();

  randomNo = Math.floor(Math.random() * 1000);

  constructor(
    private http: HttpClient,
    @Inject(BaseUrl) private readonly baseUrl: string
  ) {}

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>([this.baseUrl, this.todoPath].join('/')).pipe(
      tap((todolist: Todo[]) => {
        this.todos = todolist;
        this.todosSubject$.next(this.todos);
      }),
      catchError((err) => {
        return throwError(() => err);
      })
    );
  }
  deleteTodo(id: number) {
    this.todos = this.todos.filter((ele) => (ele.id ? +ele.id !== +id : false));
    this.todosSubject$.next(this.todos);

    return this.http.delete([this.baseUrl, this.todoPath, id].join('/'));
  }
}
