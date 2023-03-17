import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class MoviesGuard implements CanLoad, CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean {
      const { jwtToken } = this.authService.userValue;
      if (jwtToken) {
        return true;
      } else {
        this.router.navigate(['/login'], {
          queryParams: { returnUrl: state.url },
        });
        return false;
      }
  }

  canLoad(route: Route, segments: UrlSegment[]): boolean {
    const { jwtToken } = this.authService.userValue;
    if (jwtToken) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

}
