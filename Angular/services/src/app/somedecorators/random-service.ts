import { Injectable } from '@angular/core';

@Injectable()
export class RandomService {
  private _randomNo = 0;

  constructor() {
    console.log('RandomService Constructed');
    this._randomNo = Math.floor(Math.random() * 1000 + 1);
  }

  get RandomNo() {
    return this._randomNo;
  }
}
