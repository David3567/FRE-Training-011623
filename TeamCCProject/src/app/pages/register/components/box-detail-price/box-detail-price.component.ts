import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Plans } from 'src/app/service/interface/movie-interface';

@Component({
  selector: 'app-box-detail-price',
  templateUrl: './box-detail-price.component.html',
  styleUrls: ['./box-detail-price.component.scss']
})
export class BoxDetailPriceComponent {
  @Input() plan !: Plans; 
  @Output() idemiter = new EventEmitter();
  constructor() {};
  getSelect() {
    this.idemiter.emit(this.plan.name);
  }
}
