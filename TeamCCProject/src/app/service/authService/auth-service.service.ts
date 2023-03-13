import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, map, Observable, of, tap, throwError } from 'rxjs';
import { AddNewUser, AppUserAuthCookie, login, UserSubInfo } from '../interface/user-interface';

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
      .post<AppUserAuthCookie>(
        'http://localhost:4231/auth-c/signin',
        { email: loginInfo.email, password: loginInfo.password },
        { withCredentials: true }
      )
      .pipe(
        map((user: AppUserAuthCookie) => {
          this.userSubject$.next(user);
          return user;
        })
      );
  };
  sighup(userRole: { role: string }): Observable<AppUserAuthCookie | string> {
    this.AddNewUser = {
      ...this.AddNewUser,
      ...userRole,
    };
    const { username, password, email, role, tmdb_key } = this.AddNewUser;

    if (!username || !password || !email || !role || !tmdb_key)
      return of('Register failed');
    console.log(this.AddNewUser);
    return this.http
      .post<AppUserAuthCookie>(
        'http://localhost:4231/auth-c/signup',
        this.AddNewUser
      )
      .pipe(
        tap((user: AppUserAuthCookie) => {
          this.userSubject$.next(user);
          this.router.navigate(['/movies']);
        }),
        catchError((error) => {
          return throwError('SomeThing Wrong during sign up!', error);
        })
      );
  }
  logout(){
    this.http.get('http://localhost:4231/auth-c/signout').subscribe();

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
