import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Plans } from 'src/app/services/interface/movie-interface';

@Component({
  selector: 'app-box-detail-down-load',
  templateUrl: './box-detail-down-load.component.html',
  styleUrls: ['./box-detail-down-load.component.scss'],
})
export class BoxDetailDownLoadComponent {
  @Input() plan!: Plans;
  @Output() idemiter = new EventEmitter();
  constructor() {}
  getSelect() {
    this.idemiter.emit(this.plan.name);
  }
}
