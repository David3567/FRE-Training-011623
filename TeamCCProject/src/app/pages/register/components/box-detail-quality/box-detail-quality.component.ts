import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Plans } from 'src/app/service/interface/movie-interface';

@Component({
  selector: 'app-box-detail-quality',
  templateUrl: './box-detail-quality.component.html',
  styleUrls: ['./box-detail-quality.component.scss']
})
export class BoxDetailQualityComponent {
  @Input() plan !: Plans; 
  @Output() idemiter = new EventEmitter();
  constructor() {};
  getSelect() {
    this.idemiter.emit(this.plan.name);
  }
}
