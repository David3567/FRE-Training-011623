import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean {
      const { jwtToken, role } = this.authService.userValue;
      const claimType: string = route.data['claimType'];
  
      if (jwtToken && role && claimType.includes(role)) {
        return true;
      } else {
        this.router.navigate(['/register/step4']);
        return false;
      }

    return true;
  }
  
}
