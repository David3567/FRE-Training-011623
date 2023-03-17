import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  user! : Object;
  loggedIn: boolean = false;
  constructor(public authService:AuthService) { }
  ngOnInit(): void {
    this.authService.userSubject$.subscribe((user) => {
      this.user = user;
      console.log(user);
    });
    console.log(this.user)
  }
  logout(){
    console.log("logout")
    this.authService.logoutUser();
  }
}
