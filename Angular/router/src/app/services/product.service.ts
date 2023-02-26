import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly products = [
    new Product(1, 'Memory Card', 500),
    new Product(2, 'Pen Drive', 750),
    new Product(3, 'Power Bank', 100),
  ];

  getProducts() {
    return this.products;
  }

  getProduct(id: string): Product {
    return this.products.find((p) => +p.productID === +id) as Product;
  }
}

export class Product {
  constructor(
    public productID: number,
    public name: string,
    public price: number
  ) {}
}

// export class Product {
//   public productID!: number;
//   public name!: string;
//   public price!: number;

//   constructor(productID: number, name: string, price: number) {
//     this.productID = productID;
//     this.name = name;
//     this.price = price;
//   }
// }
