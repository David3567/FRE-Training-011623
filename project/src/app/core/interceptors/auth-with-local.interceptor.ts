import { Inject, Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AuthServer } from '../core.module';

@Injectable()
export class AuthWithLocalInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService,
    @Inject(AuthServer) private autoServerPath: string) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const user = this.authService.userValue;

    const isLoggedIn = user && user.jwtToken;
    const isApiUrl = request.url.startsWith(
      `${this.autoServerPath}/auth/userupdate`
    );
    let modifiedRequest = request.clone();
    if (isLoggedIn && isApiUrl) {
      modifiedRequest = request.clone({
        setHeaders: { Authorization: `Bearer ${user.jwtToken}` },
      });
    }
    return next.handle(modifiedRequest);
  }
}
