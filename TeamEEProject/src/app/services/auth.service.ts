import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { signupData } from '../interfaces/signupData';
import  jwt_decode  from 'jwt-decode';
import { Router } from '@angular/router';
import { User } from '../interfaces/User';
import { refreshTokenDTO } from '../interfaces/refreshTokenDTO';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userSubject$ = new BehaviorSubject<User>({} as User);
  isLoggedIn : boolean = false;

  constructor(private http: HttpClient, @Inject('API_BASE_URL') private baseUrl: string, private router: Router) { 
    this.registerUser = this.registerUser.bind(this);
    this.loginUser = this.loginUser.bind(this);
    this.refreshToken = this.refreshToken.bind(this);
    this.setUserData = this.setUserData.bind(this);
    this.logoutUser = this.logoutUser.bind(this);
    this.getUser = this.getUser.bind(this);
  }

  registerUser(user: signupData) { 
    return this.http.post(`${this.baseUrl}auth/signup`, user).pipe(
      tap(this.setUserData)

    );
  }
  loginUser(email: string, password: string) { 
    return this.http.post(`${this.baseUrl}auth/signin`, {email, password}).pipe(
      tap(this.setUserData)
    );
  }
  logoutUser() {
    localStorage.removeItem('token');
    this.userSubject$.next({} as User);
    this.isLoggedIn = false;
    console.log(this.getUser())
    this.router.navigate(['/homepage']);
  }
  getUser() {
    return this.userSubject$.value;
  }
  setUserData(data: any) {
      localStorage.setItem('token', data.accessToken);
      console.log(data)
      const userData : User = (jwt_decode(data.accessToken));
      userData.role = data.role;
      this.userSubject$.next(userData)
      this.isLoggedIn = true;
  }
  refreshToken() : any {
    const user = jwt_decode(localStorage.getItem('token') as string) as refreshTokenDTO;
    console.log(user)
    if (user) {
    return this.http.post(`${this.baseUrl}auth/refresh-token`, { username:user.username , id:user.id, email:user.email, tmdb_key:user.tmdb_key}).pipe(
      tap(this.setUserData),
      tap(data => console.log(data))
    );
    }
  }
  updateRole(role: string) {
    const user = this.getUser();
    user.role = role;
    const token = localStorage.getItem('token');
    return this.http.patch(`${this.baseUrl}auth/updateuser`, {token, role}, {headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    }}).pipe(
      tap(this.setUserData)
    );
  }
  initializeLogin() {
    this.refreshToken()?.subscribe();
  }

}
