import { Component, SkipSelf, Self, Optional, Host } from '@angular/core';
import { RandomService } from './random-service';

@Component({
  selector: 'my-child',
  template: `
    <div class="box">
      <p>ChildComponent => {{ randomNo }}</p>

      <hr />
      this is ng-content:
      <ng-content></ng-content>

      <hr />
      <my-grandChild></my-grandChild>
    </div>
  `,
  providers: [],
  viewProviders: [],
})
export class ChildComponent {
  randomNo;
  constructor(private randomService: RandomService) {
    this.randomNo = this.randomService?.RandomNo;
  }
}
