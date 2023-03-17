import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  BehaviorSubject,
  catchError,
  map,
  Observable,
  of,
  tap,
  throwError,
} from 'rxjs';

import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';

import {
  userToAdd,
  UserSubInfo,
  AppUserAuthCookie,
  UserLoginInfo,
  AppUserToken,
} from '../interface/user-interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:4231/auth';
  public usertoAdd: userToAdd = {
    username: '',
    password: '',
    email: '',
    role: '',
    tmdb_key: '',
  };
  public userSubject$: BehaviorSubject<AppUserAuthCookie>;

  constructor(private http: HttpClient, private router: Router) {
    this.userSubject$ = new BehaviorSubject<AppUserAuthCookie>({
      id: '',
      username: '',
      email: '',
      role: '',
      tmdb_key: '',
    });
  }

  setNewUser(userSubInfo: UserSubInfo) {
    console.log('current user information', userSubInfo);
    // console.log('Setting new user');
    this.usertoAdd = {
      ...this.usertoAdd,
      ...userSubInfo,
    };
    console.log('iiiii', this.usertoAdd);
  }

  registerUser(userRole: { role: string }): Observable<any> {
    const url = `${this.apiUrl}/signup`;
    this.usertoAdd = {
      ...this.usertoAdd,
      ...userRole,
    };
    const { username, password, email, role, tmdb_key } = this.usertoAdd;
    if (!username || !password || !email || !role || !tmdb_key)
      return of('Register failed');

    console.log(this.usertoAdd);

    return this.http.post<AppUserToken>(url, this.usertoAdd).pipe(
      tap((user: AppUserToken) => {
        this.handleSuccessfulSignup(user);
      }),
      catchError((error) => {
        return throwError('Something went wrong during sign up!', error);
      })
    );
  }
  private handleSuccessfulSignup(user: AppUserToken) {
    const userInfo: any = jwt_decode(user.accessToken);
    userInfo.role = user.role;
    localStorage.setItem('accessToken', user.accessToken);
    localStorage.setItem('role', user.role);
    this.userSubject$.next(userInfo);
    this.router.navigate(['/movies']);
  }

  logout() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('role');
    this.userSubject$.next({
      id: '',
      username: '',
      email: '',
      role: '',
      tmdb_key: '',
    });
    this.router.navigate(['/home']);
  }

  login(loginInfo: UserLoginInfo) {
    // console.log(loginInfo)
    return this.http
      .post<AppUserToken>(
        `${this.apiUrl}/signin`,
        { email: loginInfo.email, password: loginInfo.password },
        { withCredentials: true }
      )
      .pipe(
        map((user: AppUserToken) => {
          let userInfo: any = jwt_decode(user.accessToken);
          userInfo.role = user.role;
          localStorage.setItem('accessToken', user.accessToken);
          localStorage.setItem('role', user.role);
          this.userSubject$.next(userInfo);
          return user;
        }),
        catchError((error) => {
          return throwError('SomeThing Wrong during sign in!', error);
        })
      );
  }

  refreshToken(): Observable<AppUserToken | string> {
    console.log('refreshing token');
    const user = this.getDecodedUserFromLocalStorage();

    if (!user) {
      return throwError('No valid user found in localStorage!');
    }

    return this.http
      .post<AppUserToken>(`${this.apiUrl}/refresh-token`, user)
      .pipe(
        tap((user: AppUserToken) => {
          this.updateLocalStorageAndUserSubject(user);
        }),
        catchError((error) => {
          return throwError(
            'Something went wrong during refresh token!',
            error
          );
        })
      );
  }

  private getDecodedUserFromLocalStorage(): any {
    const token = localStorage.getItem('accessToken');
    const role = localStorage.getItem('role');

    if (!token) {
      return null;
    }

    const user: any = jwt_decode(token);
    user.role = role;
    delete user.exp;
    delete user.iat;

    return user;
  }

  private updateLocalStorageAndUserSubject(user: AppUserToken) {
    const userInfo: any = jwt_decode(user.accessToken);
    userInfo.role = user.role;
    localStorage.setItem('accessToken', user.accessToken);
    localStorage.setItem('role', user.role);
    this.userSubject$.next(userInfo);
  }

  updateRole(userRole: { role: string }): Observable<AppUserToken | string> {
    if (!userRole) {
      return of('Register failed');
    }

    return this.http
      .patch<AppUserToken>(`${this.apiUrl}/userupdate`, userRole)
      .pipe(
        tap((user: AppUserToken) => {
          const userInfo: any = jwt_decode(user.accessToken);
          userInfo.role = user.role;
          localStorage.setItem('accessToken', user.accessToken);
          localStorage.setItem('role', user.role);
          this.userSubject$.next(userInfo);
          this.router.navigate(['/movies']);
        }),
        catchError((error) => {
          return throwError('Something went wrong during role update!', error);
        })
      );
  }
}
