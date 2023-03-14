import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Todo } from './todoGraphql.service';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private readonly baseUrl = 'https://jsonplaceholder.typicode.com';
  private readonly path = 'todos';

  private todolist: Todo[] = [];
  private todolistSub$: Subject<Todo[]> = new Subject();
  todolist$: Observable<Todo[]> = this.todolistSub$.asObservable();

  constructor(private readonly http: HttpClient) { }

  getTodos() {
    return this.http.get<Todo[]>([this.baseUrl, this.path].join('/')).pipe(
      tap((todolist) => {
        this.todolist = todolist.reverse();
        this.todolistSub$.next(this.todolist);
      })
    );
  }
  addTodo(todo: Todo) {
    return this.http.post<Todo>([this.baseUrl, this.path].join('/'), todo).pipe(
      tap((todo) => {
        this.todolist = [todo, ...this.todolist];
        this.todolistSub$.next(this.todolist);
      })
    );
  }
  deleteTodo(id: string) {
    return this.http.delete([this.baseUrl, this.path, id].join('/')).pipe(
      tap((_) => {
        this.todolist = this.todolist.filter((todo: any) => +todo.id !== +id);
        this.todolistSub$.next(this.todolist);
      })
    );
  }
}


