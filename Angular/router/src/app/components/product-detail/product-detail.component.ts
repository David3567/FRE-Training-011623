import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product, ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  product!: Product;
  id: any;
  sub = new Subscription();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit() {
    console.log('params: ', this.activatedRoute.snapshot.params);

    this.id = this.activatedRoute.snapshot.params.id;
    this.product = this.productService.getProduct(this.id);

    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    // this.sub = this.activatedRoute.paramMap.subscribe((params) => {
    //   console.log(params);
    //   this.id = params.get('id');

    //   this.product = this.productService.getProduct(this.id);
    // });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  nextPage() {}

  onBack() {
    this.router.navigate(['product']);
  }
}
