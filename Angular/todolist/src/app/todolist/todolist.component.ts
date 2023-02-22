import { Observable } from 'rxjs';
import { Component, inject } from '@angular/core';
import { Todo } from '../interfaces/todo.interface';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss'],
})
export class TodolistComponent {
  // todoService = inject(TodoService); // <-------------------------------------- inject();
  // todos!: Todo[];

  todos$!: Observable<Todo[]>;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    // this.todoService.getTodos().subscribe((todolist) => {
    //   this.todos = todolist;
    // });
    // this.todoService.todosSubject$.subscribe((todolist) => {
    //   this.todos = todolist;
    // });
    this.todos$ = this.todoService.todos$;

    this.todoService.getTodos().subscribe(() => {}, console.log);
  }

  deleteTodo(id: number) {
    this.todoService.deleteTodo(id).subscribe();
  }
}
