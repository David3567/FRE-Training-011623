import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UserRole } from 'src/app/services/interfaces/user-auth.interface';

@Injectable({
  providedIn: 'root'
})
export class MovieItemGuard implements CanActivate, CanLoad {
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean {
    const { jwtToken, role } = this.authService.userValue;
    if (
      jwtToken &&
      role &&
      (role === UserRole.ADMIN || role === UserRole.SUPERUSER)
    ) {
      return true;
    } else if (!jwtToken){
      this.router.navigate(['/register/3'], {
        queryParams: { returnUrl: state.url },
      });

    } else {
      this.router.navigate(['/'], {
        queryParams: { returnUrl: state.url },
      });
    }
    return false;
  }

  canLoad(route: Route, segments: UrlSegment[]): boolean {
    const { jwtToken, role } = this.authService.userValue;
    if (
      jwtToken &&
      role &&
      (role === UserRole.ADMIN || role === UserRole.SUPERUSER)
    ) {
      return true;
    } else if (!jwtToken){
      this.router.navigate(['/register/3']);

    } else {
      this.router.navigate(['/']);
    }
    return false;
  }
}
