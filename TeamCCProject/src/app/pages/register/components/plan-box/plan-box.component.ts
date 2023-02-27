import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Plans } from 'src/app/service/interface/movie-interface';

@Component({
  selector: 'app-plan-box',
  templateUrl: './plan-box.component.html',
  styleUrls: ['./plan-box.component.scss']
})
export class PlanBoxComponent {
  @Input() plan !: Plans; 
  @Output() idemiter = new EventEmitter();
  constructor() {};
  getSelect() {
    this.idemiter.emit(this.plan.name);
  }
}
