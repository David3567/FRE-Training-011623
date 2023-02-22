import { Component, OnInit } from '@angular/core';
import { RandomService } from './random-service';

@Component({
  selector: 'app-somedecorators',
  templateUrl: './somedecorators.component.html',
  styleUrls: ['./somedecorators.component.scss'],
  providers: [RandomService],
})
export class SomedecoratorsComponent {
  randomNo;

  constructor(private randomService: RandomService) {
    this.randomNo = this.randomService.RandomNo;
  }
}
