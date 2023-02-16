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

  // todos$!: Observable<Todo[]>;

  constructor(public todoService: TodoService) {}

  ngOnInit(): void {
    // this.todoService.getTodos().subscribe((todolist) => {
    //   this.todos = todolist;
    // });
    // this.todoService.todosSubject$.subscribe((todolist) => {
    //   this.todos = todolist;
    // });
    // this.todos$ = this.todoService.todosSubject$;
    this.todoService.getTodos().subscribe();
  }

  deleteTodo(id: number) {
    this.todoService.deleteTodo(id).subscribe();
  }
}
