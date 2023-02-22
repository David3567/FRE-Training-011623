import { Inject, Injectable } from '@angular/core';

import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products = [
    new Product(1, 'Memory Card', 500),
    new Product(1, 'Pen Drive', 750),
    new Product(1, 'Power Bank', 100),
  ];

  constructor(@Inject(LoggerService) private loggerService: any) {
    this.loggerService.log('Product Service Constructed');
  }

  log() {
    this.loggerService.log('getProducts called');
  }

  getProducts() {
    this.loggerService.log('getProducts called');
    let products: Product[];

    this.loggerService.log(this.products);
    return this.products;
  }
}

export class Product {
  constructor(
    public productID: number,
    public name: string,
    public price: number
  ) {}
}
