import { Injectable } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { ProductService } from '../services/product.service';

@Injectable({
  providedIn: 'root',
})
export class ProductGuard implements CanActivate {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const name = route.queryParamMap.get('name');

    // console.log('name in guard: ', name);

    if (name === 'David') {
      console.log('no permission!');
      this.router.navigate(['home'], { queryParams: { url: state.url } });
    }
    return true;
  }
}
