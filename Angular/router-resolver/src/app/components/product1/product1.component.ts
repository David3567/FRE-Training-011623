import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/Product.class';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product1',
  templateUrl: './product1.component.html',
  styleUrls: ['./product1.component.scss'],
})
export class Product1Component implements OnInit {
  public products!: Product[];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit() {
    console.log('ngOnInit');

    this.productService.getProducts().subscribe((data) => {
      this.products = data.reverse();
    });
  }
}
