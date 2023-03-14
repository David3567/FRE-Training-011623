import {
  AfterViewChecked,
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Todo } from '../services/todoGraphql.service';



@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoItemComponent {
  @Input('item') todo!: Todo;
  @Output() triggerDelete = new EventEmitter();

  constructor() { }

  handleDelete() {
    this.triggerDelete.emit(this.todo?.id);
  }
}
