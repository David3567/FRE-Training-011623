import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, timestamp } from 'rxjs/operators';
import { AddNewUser, UserSubInfo } from '../interface/user-interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:4231/api/auth';
  public addNewUser: AddNewUser = {
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

  registerUser(userSubInfo: UserSubInfo): Observable<any> {
    const url = `${this.apiUrl}/signup`;
    return this.http.post<any>(url, userSubInfo);
  }

  setNewUser(userSubInfo: UserSubInfo) {
    console.log(userSubInfo);
    console.log('Setting new user');
    this.addNewUser = {
      ...this.addNewUser,
      ...userSubInfo,
    };
    console.log(this.addNewUser);
  }

  clearNewUser() {
    this.addNewUser = {
      username: '',
      password: '',
      email: '',
      role: '',
      tmdb_key: '',
    };
  }
}
