import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/service/authService/auth-service.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit{
  loginForm !: FormGroup;
  constructor(public fb: FormBuilder, private userServer: AuthServiceService, private router: Router) {}
  ngOnInit(){
    this.loginForm = this.fb.group({
      email: '',
      password: '',
    })
  }
  onSubmit(){
    this.userServer.login(this.loginForm.value).subscribe();
    this.router.navigate(['/movies'])
  }
}
