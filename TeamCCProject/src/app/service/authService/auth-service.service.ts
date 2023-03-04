import { Injectable } from '@angular/core';
import { AddNewUser, UserSubInfo } from '../interface/user-interface';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private AddNewUser: AddNewUser = {
    username: '',
    password: '',
    email: '',
    role: '',
    tmdb_key: '',
  };
  constructor() { }
  addNewUser(userSubInfo: UserSubInfo){
    // console.log(userSubInfo);
    this.AddNewUser = {
      ...this.AddNewUser,
      ...userSubInfo,
    }
    console.log(this.AddNewUser);
  }
}
