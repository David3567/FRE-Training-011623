import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-testsubject',
  templateUrl: './testsubject.component.html',
  styleUrls: ['./testsubject.component.scss'],
  // viewProviders: [TodoService],
  // providers: [TodoService],
})
export class TestsubjectComponent implements OnInit {
  constructor(public todoService: TodoService) {}

  ngOnInit(): void {
    // console.log('hello form testsubjectcompnent');
    // this.todoService.todosSubject$.subscribe((data) =>
    //   console.log('testsubject: ', data)
    // );
  }
}
