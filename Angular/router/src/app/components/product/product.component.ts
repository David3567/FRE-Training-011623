import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product, ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  products: Product[] = [];

  pageNo = '';
  snapshotPageNo = '';
  name = '';

  constructor(
    private productService: ProductService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    console.log('ngOnInit');

    this.products = this.productService.getProducts();

    this.snapshotPageNo =
      this.activatedRoute.snapshot.queryParamMap.get('pageNum') || '0';
    const name =
      this.activatedRoute.snapshot.queryParamMap.get('name') || 'no-name';

    this.activatedRoute.queryParamMap.subscribe((params) => {
      this.pageNo = params.get('pageNum') || '0';
      this.name = params.get('name') || '';
      console.log('Query params ', this.pageNo, name);
    });
  }

  nextPage() {
    this.router.navigate(['product']);
  }
}
