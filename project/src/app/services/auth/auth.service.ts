import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, Observable, of, tap, throwError } from 'rxjs';
import { AuthServer } from 'src/app/core/core.module';
import { AppUserAuth, UserRole } from '../interfaces/user-auth.interface';
import { AppUserRegister, UserInfo } from '../interfaces/user-signup.interface';
import { JwtHelperService } from '@auth0/angular-jwt';
import { TmdbService } from '../tmdb/tmdb.service';
import { AuthDto } from '../interfaces/authDto.interface';
import { AppUser } from '../interfaces/user-login.interface';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private jwtHelper = new JwtHelperService();
  private appUserRegister = new AppUserRegister();
  private refreshTokenTimeout!: ReturnType<typeof setTimeout>;
  private userSubject$: BehaviorSubject<AppUserAuth> = new BehaviorSubject({});
  user$: Observable<AppUserAuth> = this.userSubject$.asObservable();

  get userValue(): AppUserAuth {
    return this.userSubject$.value;
  }
  get appNewUser(): AppUserRegister {
    return this.appUserRegister;
  }
  constructor(
    private readonly router: Router,
    private readonly http: HttpClient,
    private readonly tmdbService: TmdbService,
    @Inject(AuthServer) private readonly authServerPath: string) { }

  addUserInfo(userInfo: UserInfo) {
    this.appUserRegister = {
      ...this.appUserRegister,
      ...userInfo,
    };
  }

  signup(userRole: { role: UserRole }): Observable<AuthDto | string> {
    this.appUserRegister = {
      ...this.appUserRegister,
      ...userRole,
    };
    const { username, password, email, role, tmdb_key } = this.appUserRegister;

    if (!username || !password || !email || !role || !tmdb_key)
      return of('Registration failed');

    return this.http.post<AuthDto>(
        `${this.authServerPath}/auth/signup`,
        this.appUserRegister
      )
      .pipe(
        tap(({ accessToken, role }: AuthDto) => {
          this.setUserValuebyToken({ accessToken, role })
          this.router.navigate(['/movies']);
        }),
        catchError((error) => {
          return throwError('Something wrong during the signup!', error);
        })
      );
  }

  login(appUser: AppUser): Observable<AuthDto> {
    return this.http.post<AuthDto>(
        `${this.authServerPath}/auth/signin`,
        appUser
      )
      .pipe(
        tap(({ accessToken, role }: AuthDto) => {
          this.setUserValuebyToken({ accessToken, role });
          this.router.navigate(['/movies']);
        }),
        catchError((error) => {
          return throwError('Something wrong during the login!', error);
        })
      );
  }
  logout() {
    localStorage.removeItem('access_token');
    this.tmdbService.setMyApiKey = '';
    this.stopRefreshTokenTimer();
    this.userSubject$.next({});
    this.router.navigate(['/'])
  }

  refreshToken(): Observable<AuthDto | string> {
    const currentToken = localStorage.getItem('access_token');
    if (!currentToken) {
      this.router.navigate(['/']);
      return of('err');
    }
    const { id, username, email, tmdb_key} = this.jwtHelper.decodeToken(currentToken);
    const user = { id, username, email, tmdb_key };
    return this.http.post<AuthDto>(`${this.authServerPath}/auth/refresh-token`, user)
      .pipe(
        tap(({accessToken, role}: AuthDto) => {
          this.setUserValuebyToken({ accessToken, role });
        }))
  }

  upgradePermission(userRole: { role: UserRole }): Observable<AuthDto> {
    this.stopRefreshTokenTimer();
    return this.http.patch<AuthDto>(`${this.authServerPath}/auth/userupdate`, userRole)
    .pipe(tap(({accessToken, role}: AuthDto) => {
      this.setUserValuebyToken({ accessToken, role });
      this.router.navigate(['/movies']);
    }),
    catchError((error) => {
      return throwError('Something wrong during the upgrade!', error);
    }))
  }

  private setUserValuebyToken = ({ accessToken, role }: AuthDto) => {
    localStorage.setItem('access_token', accessToken);
    const { id, username, email, tmdb_key, exp } = this.jwtHelper.decodeToken(accessToken);
    this.tmdbService.setMyApiKey = tmdb_key;
    const user = { id, username, email, tmdb_key, role, jwtToken: accessToken };
    this.userSubject$.next(user);
    this.startRefreshTokenTimer(exp);
  }

  private startRefreshTokenTimer(exp: string) {
    const expires = new Date(+exp * 1000);
    const timeout = expires.getTime() - Date.now();
    this.refreshTokenTimeout = setTimeout(() => {
      if (this.userValue.jwtToken) {
        this.refreshToken().subscribe();
      }
    }, timeout)
  }

  private stopRefreshTokenTimer() {
    clearTimeout(this.refreshTokenTimeout);
  }
}
