import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Question } from 'src/app/interface/question';

@Component({
  selector: 'app-q-and-a-item',
  templateUrl: './q-and-a-item.component.html',
  styleUrls: ['./q-and-a-item.component.scss']
})
export class QAndAItemComponent {
  @Input() qna = {} as Question;
  @Input() activeQnAId: string = "";
  @Output() onChangeState: EventEmitter<Question> = new EventEmitter();

  onChange(qna : Question) {
    this.onChangeState.emit(qna)
  }
}
