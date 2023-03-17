import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/authService/auth-service.service';
import { AppUserAuthCookie } from 'src/app/services/interface/user-interface';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  public user: AppUserAuthCookie = {
    id: '',
    username: '',
    email: '',
    role: '',
    tmdb_key: '',
  };
  constructor(private router: Router, public authServer: AuthService) {}
  ngOnInit() {
    this.authServer.userSubject$.subscribe((data) => {
      this.user = data;
    });
  }
  logout() {
    this.authServer.logout();
  }
  debugUserInfo() {
    return JSON.stringify(this.user);
  }
}
