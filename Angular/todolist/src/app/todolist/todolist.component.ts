import { Observable } from 'rxjs';
import { Component, inject } from '@angular/core';
import { Todo } from '../interfaces/todo.interface';
import { TodoService } from '../services/todo.service';
import { Store } from '@ngrx/store';

import * as TodoSelectors from '../Ngrx/todos.selectors';
import * as TodoActions from '../Ngrx/todos.actions';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss'],
})
export class TodolistComponent {
  // todoService = inject(TodoService); // <-------------------------------------- inject();
  // todos!: Todo[];

  todos$!: Observable<Todo[]>;

  constructor(
    // private todoService: TodoService,
    private store: Store
  ) {}

  ngOnInit(): void {
    // this.todoService.getTodos().subscribe((todolist) => {
    //   this.todos = todolist;
    // });
    // this.todoService.todosSubject$.subscribe((todolist) => {
    //   this.todos = todolist;
    // });
    // this.todos$ = this.todoService.todos$;
    this.todos$ = this.store.select(TodoSelectors.getTodolist);

    this.store.dispatch(TodoActions.loadTodolist());
    // this.todoService.getTodos().subscribe(() => {}, console.log);
  }

  deleteTodo(id: number) {
    // this.todoService.deleteTodo(id).subscribe();
  }
}
