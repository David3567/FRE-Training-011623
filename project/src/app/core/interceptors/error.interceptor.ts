import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((err) => {
        const authToken = this.authService.userValue.jwtToken;
        if ([401, 403].includes(err.status) && authToken) {
          console.log('error happend!');
          this.authService.logout();
        }
        const error = (err && err.error && err.error.message) || err.statusText;
        console.error('error: ', err);
        return throwError(error);
      })
    );
  }
}
