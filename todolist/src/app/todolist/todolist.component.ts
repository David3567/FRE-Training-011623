import { Component, inject } from '@angular/core';
import { Todo } from '../interfaces/todo.interface';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss'],
})
export class TodolistComponent {
  todoService = inject(TodoService); // <-------------------------------------- inject();
  todos!: Todo[];

  // constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.getTodos().subscribe((todolist) => {
      this.todos = todolist;
    });
  }

  deleteTodo(id: number) {
    console.log(`delete todo with id ${id}`);
  }
}
