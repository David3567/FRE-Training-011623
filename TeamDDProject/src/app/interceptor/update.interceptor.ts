import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UpdateInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (request.url.startsWith(`http://localhost:4231/auth/userupdate`)) {
      console.log(request.url);
      if (localStorage.getItem('accessToken') !== null) {
        request = request.clone({
          setHeaders: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        });
        console.log(request);
      }
    }
    return next.handle(request);
  }
}
