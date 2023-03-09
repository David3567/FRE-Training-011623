import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { signupData } from '../interfaces/signupData';
import  jwt_decode  from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userSubject$ = new BehaviorSubject({});

  constructor(private http: HttpClient, @Inject('API_BASE_URL') private baseUrl: string) { 
    this.registerUser = this.registerUser.bind(this);
    this.loginUser = this.loginUser.bind(this);
  }
  registerUser(user: signupData) { 
    return this.http.post(`${this.baseUrl}auth/signup`, user).pipe(
      tap((data: any) => {
        localStorage.setItem('token', data.accessToken);
        console.log(jwt_decode(data.accessToken));
        this.userSubject$.next(data)
      })

    );
  }
  loginUser(username: string, password: string) { 
    return this.http.post(`${this.baseUrl}auth/login`, {username, password}).pipe(
      tap((data: any) => {
        localStorage.setItem('token', data.token);
        this.userSubject$.next(data)
      })
    );
  }

}
