import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../interfaces/todo.interface';

@Component({
  selector: 'app-todoitem',
  templateUrl: './todoitem.component.html',
  styleUrls: ['./todoitem.component.scss'],
})
export class TodoitemComponent {
  @Input() todo!: Todo;
  @Output() idemiter = new EventEmitter();

  ngOnInit() {}

  getId() {
    // console.log(typeof this.todo.id);
    this.idemiter.emit(this.todo.id);
  }
}
