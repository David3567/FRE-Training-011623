import {
  Directive,
  ElementRef,
  Input,
  OnInit,
  SkipSelf,
  Self,
  Optional,
  Host,
} from '@angular/core';
import { RandomService } from './random-service';

@Directive({
  selector: '[testDirective]',
  providers: [],
})
export class testDirective implements OnInit {
  @Input() ttClass: string | undefined;

  constructor(private el: ElementRef, private randomService: RandomService) {}

  ngOnInit() {
    this.el.nativeElement.innerHTML =
      'Directive => ' + this.randomService.RandomNo;
  }
}
