import { Injectable } from '@angular/core';

export class LoggerService {
  num = 0;

  constructor() {}

  print() {
    console.log('this is a injectable service');
  }
}
