import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../services/todoGraphql.service';

import { TodoGraphqlService } from './../services/todo.graphql.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
})
export class TodolistComponent implements OnInit {
  todolist$!: Observable<Todo[]>;

  todo: Todo = {
    title: '',
    completed: false,
    userId: 2,
  };

  constructor(
    private readonly todoService: TodoGraphqlService
  ) { }

  ngOnInit(): void {

    this.todolist$ = this.todoService.todolist$ as Observable<Todo[]>;
    this.todoService.getTodos().subscribe();
  }

  onChange() {
    this.todoService.addTodo(this.todo).subscribe();
  }

  deleteTodo(id: string) {
    this.todoService.deleteTodo(id).subscribe();
  }
}
