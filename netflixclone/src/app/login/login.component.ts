import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  invalidLogin: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const usersString = localStorage.getItem('users');
    if (usersString) {
      const users = JSON.parse(usersString);
      const authenticatedUser = users.find((user: any) => user.email === this.email && user.password === this.password);
      if (authenticatedUser) {
        localStorage.setItem('currentUser', JSON.stringify(authenticatedUser));
        console.log('User authenticated. Navigating to movielist page...');
        this.router.navigate(['movielist']);
      } else {
        console.log('Invalid login. Please try again.');
        this.invalidLogin = true;
      }
    } else {
      console.log('No users found in local storage.');
      this.invalidLogin = true;
    }
  }
}
