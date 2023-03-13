import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, map, Observable, of, tap, throwError } from 'rxjs';
import { AddNewUser, AppUserAuthCookie, AppUserToken, login, UserSubInfo } from '../interface/user-interface';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  public userSubject$ !: BehaviorSubject<AppUserAuthCookie>
  public AddNewUser: AddNewUser = {
    username: '',
    password: '',
    email: '',
    role: '',
    tmdb_key: '',
  };
  constructor(private http: HttpClient, private router: Router) {
    this.userSubject$ = new BehaviorSubject<AppUserAuthCookie>({
      id: '',
      username: '',
      email: '',
      role: '',
      tmdb_key: '',
    });
  }
  addNewUser(userSubInfo: UserSubInfo){
    // console.log(userSubInfo);
    this.AddNewUser = {
      ...this.AddNewUser,
      ...userSubInfo,
    }
    // console.log(this.AddNewUser);
  }
  login(loginInfo: login){
    // console.log(loginInfo)
    return this.http
      .post<AppUserToken>(
        'http://localhost:4231/auth/signin',
        { email: loginInfo.email, password: loginInfo.password },
        { withCredentials: true }
      )
      .pipe(
        map((user: AppUserToken) => {
          let userInfo: any = jwt_decode(user.accessToken);
          userInfo.role = user.role;
          // userInfo.role = user.role;
          // console.log(userInfo)
          localStorage.setItem("accessToken", user.accessToken);
          localStorage.setItem("role", user.role);
          this.userSubject$.next(userInfo);
          return user;
        }),
        catchError((error) => {
          return throwError('SomeThing Wrong during sign in!', error);
        })
      );
  };
  sighup(userRole: { role: string }): Observable<AppUserToken | string> {
    this.AddNewUser = {
      ...this.AddNewUser,
      ...userRole,
    };
    const { username, password, email, role, tmdb_key } = this.AddNewUser;

    if (!username || !password || !email || !role || !tmdb_key)
      return of('Register failed');
    console.log(this.AddNewUser);
    return this.http
      .post<AppUserToken>(
        'http://localhost:4231/auth/signup',
        this.AddNewUser
      )
      .pipe(
        tap((user: AppUserToken) => {
          let userInfo: any = jwt_decode(user.accessToken);
          userInfo.role = user.role;
          // console.log(userInfo)
          localStorage.setItem("accessToken", user.accessToken);
          localStorage.setItem("role", user.role);
          this.userSubject$.next(userInfo);
          this.router.navigate(['/movies']);
        }),
        catchError((error) => {
          return throwError('SomeThing Wrong during sign up!', error);
        })
      );
  }
  logout(){
    localStorage.removeItem("accessToken");
    localStorage.removeItem("role");
    this.userSubject$.next({
      id: '',
      username: '',
      email: '',
      role: '',
      tmdb_key: ''
    });
    this.router.navigate(['/home']);
  };
}
