import { random } from './../../../services/node_modules/@colors/colors/index.d';
import { Component } from '@angular/core';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // providers: [TodoService],
  viewProviders: [TodoService],
})
export class AppComponent {
  random = 0;
  title = 'todolist'

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.random = this.todoService.randomNo;
    console.log(this.random);
  }
}
