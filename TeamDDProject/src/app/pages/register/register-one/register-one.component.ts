import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/services/authService/auth-service.service';
import { CustomValidator } from 'src/app/services/custom.validator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register-one.component.html',
  styleUrls: ['./register-one.component.css'],
})
export class RegisterOneComponent implements OnInit {
  registerForm1!: FormGroup;
  isLoading: false | undefined;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private authService: AuthService,
    private customValidator: CustomValidator
  ) {}
  get email() {
    return this.registerForm1.get('email') as FormControl;
  }

  get password() {
    return this.registerForm1.get('password') as FormControl;
  }

  ngOnInit() {
    this.registerForm1 = this.formBuilder.group({
      email: [
        this.authService.addNewUser.email,
        [Validators.email, Validators.required],
        [this.customValidator.emailExists(this)],
      ],
      password: ['', [Validators.required]],
    });
  }

  onNext() {
    console.log(this.registerForm1.value);
    this.authService.setNewUser(this.registerForm1.value);
    this.router.navigate(['/register/2']);
  }

  // onSubmit() {
  //   console.log(this.registerForm1.value);
  // }
}
