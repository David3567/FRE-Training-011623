import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/authService/auth-service.service';
import jwt_decode from 'jwt-decode';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'notflex';
  constructor(private authService: AuthService) {}
  ngOnInit(): void {
    let AccessT = localStorage.getItem('accessToken');
    let Role = localStorage.getItem('role');

    if (AccessT !== null) {
      let userInfo: any = jwt_decode(AccessT);
      userInfo.role = Role;
      this.authService.userSubject$.next(userInfo);
      if (AccessT !== null && Role !== null) {
        this.authService.refreshToken().subscribe();
      }
    }
  }
}
