import { Component, SkipSelf, Self, Optional, Host } from '@angular/core';
import { RandomService } from './random-service';

@Component({
  selector: 'my-grandChild',
  template: `
    <div class="box">
      GrandChildComponent => {{ randomNo }}
      <div class="dirbox" testDirective>fdf</div>
    </div>
  `,
  providers: [RandomService],
})
export class GrandChildComponent {
  randomNo;
  constructor(private randomService: RandomService) {
    this.randomNo = this.randomService?.RandomNo;
  }
}
