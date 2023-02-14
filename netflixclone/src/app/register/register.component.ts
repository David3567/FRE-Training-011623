import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  private Url='localhost:400';

  registerUser(username:string,password:string,email:string,role:string,tmbd_key:string){
     const userInfo={
       username,
       password,
       email,
       role,
       tmbd_key

     }
    //  return this.htttp.post(this.Url.userInf)
  }

  constructor(private router: Router) {}

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

 
}
