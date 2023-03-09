import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/service/authService/auth-service.service';
import { CustomValidator } from 'src/app/service/validators/custom.validator';


@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit{
  RegisterFormOne!: FormGroup;
  isLoading: boolean = false;

  constructor(private fb: FormBuilder, private router: Router, private userServer: AuthServiceService, private CustomValidator: CustomValidator) {};
  get RegistEmail (){
    return this.RegisterFormOne.get('email') as FormControl;
  }
  get RegistPassword(){
    return this.RegisterFormOne.get('password') as FormControl;
  }
  ngOnInit(){
    this.RegisterFormOne = this.fb.group({
      email: [this.userServer.AddNewUser.email, [Validators.email, Validators.required], [this.CustomValidator.hasEmail(this)]],
      password: ['', [Validators.required]],
    })
  }
  onNext(){
    this.userServer.addNewUser(this.RegisterFormOne.value);
    this.router.navigate(['/register/step2'])
  }
}
