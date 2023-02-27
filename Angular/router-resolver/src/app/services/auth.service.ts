import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUser$: BehaviorSubject<User> = new BehaviorSubject(
    new User(1, 'Tom', Role.Use, 'Tom@gmail.com')
  );

  set user(newUser: User) {
    this.currentUser$.next(newUser);
  }
  get user(): User {
    return this.currentUser$.value;
  }

  constructor() {}
}

export enum Role {
  Use = 'user',
  Super = 'super',
  Admin = 'admin',
}

export class User {
  constructor(
    public id: number,
    public name: string,
    public role: Role,
    public email: string
  ) {}
}
