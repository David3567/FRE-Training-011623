import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor() { }
  private users: any[]=[];

  registerUser(user: any)
  {
    this.users.push(user);
  }
  getUsers()
  {
    return this.users
  }
}
