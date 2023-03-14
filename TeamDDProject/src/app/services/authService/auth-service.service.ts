import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';

import {
  userToAdd,
  UserSubInfo,
  AppUserAuthCookie,
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

  constructor(private http: HttpClient) {}

  //   checkEmail(email: any): Observable<boolean> {
  //     const url = `${this.apiUrl}/check-email`;
  //     return this.http.post<boolean>(url, { email });
  //   }

  setNewUser(userSubInfo: UserSubInfo) {
    console.log('current user information', userSubInfo);
    // console.log('Setting new user');
    this.usertoAdd = {
      ...this.usertoAdd,
      ...userSubInfo,
    };
    console.log('iiiii', this.usertoAdd);
  }

  registerUser(): Observable<any> {
    const url = `${this.apiUrl}/signup`;
    const { username, password, email, role, tmdb_key } = this.usertoAdd;
    if (!username || !password || !email || !role || !tmdb_key)
      return of('Register failed');
    console.log(this.usertoAdd);
    return this.http.post<any>(url, this.usertoAdd);
  }

  clearNewUser() {
    this.usertoAdd = {
      username: '',
      password: '',
      email: '',
      role: '',
      tmdb_key: '',
    };
  }
}
