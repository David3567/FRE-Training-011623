import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products = [
    new Product(1, 'Memory Card', 500),
    new Product(2, 'Pen Drive', 750),
    new Product(3, 'Power Bank', 100),
  ];

  getProducts() {
    return this.products;
  }

  getProduct(id: number): Product {
    return this.products.find((p) => p.productID == id) as Product;
  }
}

export class Product {
  constructor(
    public productID: number,
    public name: string,
    public price: number
  ) {}
}
