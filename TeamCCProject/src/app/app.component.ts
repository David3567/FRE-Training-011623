import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from './service/authService/auth-service.service';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'TeamCCProject';
  constructor(private userServer: AuthServiceService) {}
  ngOnInit(): void {
    let AccessT = localStorage.getItem("accessToken");
    let Role = localStorage.getItem("role");
    // console.log(AccessT);
    if(AccessT !== null && Role !== null){
      this.userServer.refreshToken().subscribe();
    }
    // let userInfo: any = jwt_decode(AccessT);
    // // userInfo.role = user.role;
    // // console.log(userInfo)
    // localStorage.setItem("accessToken", user.accessToken);
    // localStorage.setItem("role", user.role);
    // this.userSubject$.next(userInfo);
  }
}
