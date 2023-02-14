import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Plans } from '../plans';

@Component({
  selector: 'app-box-detail-resolution',
  templateUrl: './box-detail-resolution.component.html',
  styleUrls: ['./box-detail-resolution.component.scss']
})
export class BoxDetailResolutionComponent {
  @Input() plan !: Plans; 
  @Output() idemiter = new EventEmitter();
  constructor() {};
  getSelect() {
    this.idemiter.emit(this.plan.name);
  }
}
