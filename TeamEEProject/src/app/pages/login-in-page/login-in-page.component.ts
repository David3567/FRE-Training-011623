import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup,FormControl,Validators,FormArray, AbstractControl, AsyncValidatorFn, ValidationErrors, ValidatorFn} from '@angular/forms';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-in-page',
  templateUrl: './login-in-page.component.html',
  styleUrls: ['./login-in-page.component.css']
})
export class LoginInPageComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private authService: AuthService, private router:Router) { 
    this.loginForm = this.fb.group({
      userName: ['', [Validators.required, this.emailOrPhoneNumberValidator()]],
      password: ['', Validators.required],
    });
  }
  
  emailOrPhoneNumberValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string] : any } | null => {
      const value = control.value;  // return null indicates that the field is valid
      if (!value) {
        return { 'required': true };
      }
      const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value); // check email form
      const isPhoneNumber = /^\d{10}$/.test(value); // whether phone number has 10 digits
  
      if (!isEmail && !isPhoneNumber) {
        return { 'invalidUsername': true };
      }
      return null;
    };
    
  }
  
  ngOnInit() {
    // this.loginForm = this.fb.group({
    //   username: ['', [Validators.required, this. emailOrPhoneNumberValidator()]],
    //   password: ['', Validators.required],
    // });
  }



  onSubmit(){
    const userName = this.loginForm.get('userName')?.value;
    const password = this.loginForm.get('password')?.value;
    console.log(this.loginForm.value);

  // Check whether the username and password match the register data
  // Send an HTTP request to validate the credentials?
    this.authService.loginUser(userName, password).subscribe((data: any) => {
      console.log(data);
      this.router.navigate(['/movielist']);
    }
    );
  }
}
