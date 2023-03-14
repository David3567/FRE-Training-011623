import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/service/authService/auth-service.service';
import { AppUserAuthCookie } from 'src/app/service/interface/user-interface';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit{
  public user: AppUserAuthCookie = {
    id: '',
    username: '',
    email: '',
    role: '',
    tmdb_key: '',
  }
  constructor(private router: Router, public userServer: AuthServiceService){};
  ngOnInit(){
    // console.log(this.userServer.userSubject$.getValue())
    this.userServer.userSubject$.subscribe((data) =>{
      // console.log('navBar', data);
      this.user = data;
    })
  }
  logout(){
    this.userServer.logout();
  }
}
