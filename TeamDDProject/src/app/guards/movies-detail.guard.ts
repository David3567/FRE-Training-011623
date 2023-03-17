import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/authService/auth-service.service';
@Injectable({
  providedIn: 'root',
})
export class MoviesDetailGuard implements CanActivate {
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const jwtToken = localStorage.getItem('accessToken');
    const role = localStorage.getItem('role');
    if (jwtToken === null || role === null) {
      alert('Please login');
      this.router.navigate(['/login']);
      return false;
    } else if (role === 'USER') {
      alert("you don't have authorization for movie detail");
      this.router.navigate(['/register/3/' + role]);
      return false;
    } else {
      return true;
    }
  }
}
