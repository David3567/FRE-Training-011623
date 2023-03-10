import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, map, Observable, of, tap, throwError } from 'rxjs';
import { AuthServer } from 'src/app/core/core.module';
import { AppUserAuthCookie } from '../interfaces/appUserAuthCookie.interface';
import { AppUserAuth, UserRole } from '../interfaces/user-auth.interface';
import { AppUserRegister, UserInfo } from '../interfaces/user-signup.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private appUserRegister = new AppUserRegister();

  private userSubject$: BehaviorSubject<AppUserAuth> = new BehaviorSubject({});
  user$: Observable<AppUserAuth> = this.userSubject$.asObservable();

  get userValue(): AppUserAuth {
    return this.userSubject$.value;
  }
  constructor(private readonly router: Router,
    private readonly http: HttpClient,
    @Inject(AuthServer) private readonly authServerPath: string) { }

  addUserInfo(userInfo: UserInfo) {
    this.appUserRegister = {
      ...this.appUserRegister,
      ...userInfo,
    };
  }

  signup(userRole: { role: UserRole }): Observable<AppUserAuthCookie | string> {
    this.appUserRegister = {
      ...this.appUserRegister,
      ...userRole,
    };
    console.log(this.appUserRegister)
    const { username, password, email, role, tmdb_key } = this.appUserRegister;

    if (!username || !password || !email || !role || !tmdb_key)
      return of('Registration failed');

    return this.http.post<AppUserAuthCookie>(
        `${this.authServerPath}/auth-c/signup`,
        this.appUserRegister
      )
      .pipe(
        tap((user: AppUserAuthCookie) => {
          this.userSubject$.next(user);
          this.router.navigate(['/movies']);
        }),
        catchError((error) => {
          return throwError('Something wrong during the signup!', error);
        })
      );
  }

  login(email: string, password: string): Observable<AppUserAuthCookie> {
    return this.http.post<AppUserAuthCookie>(
        `${this.authServerPath}/auth-c/signin`,
        { email, password },
        { withCredentials: true }
      )
      .pipe(
        tap((user: AppUserAuthCookie) => {
          this.userSubject$.next(user);
          this.router.navigate(['/movies']);
        })
      );
  }
  logout() {
    this.http.get(`${this.authServerPath}/auth-c/signout`).subscribe(() => {
      this.userSubject$.next({});
      this.router.navigate(['/home']);
    });
  }

  refreshToken(): Observable<AppUserAuthCookie> {
    return this.http.get<AppUserAuthCookie>(`${this.authServerPath}/auth-c/initapp`)
      .pipe(
        tap((user: AppUserAuthCookie) => {
          this.userSubject$.next(user);
          this.router.navigate(['/movies']);
        }),
        catchError((error) => {
          return throwError('Something wrong during the signup!', error);
        })
      );
  }
}
