import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime, map, Observable, tap } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-registration-one',
  templateUrl: './registration-one.component.html',
  styleUrls: ['./registration-one.component.scss']
})
export class RegistrationOneComponent implements OnInit {
  registerForm1!: FormGroup;
  isLoading = false;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router, private authService: AuthService ) {
    
  }

  ngOnInit(): void {
    this.registerForm1 = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email], [this.checkEmail]],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(60)]]
    })
  }
  get email() {
    return this.registerForm1.get('email');
  }

  get password() {
    return this.registerForm1.get('password');
  }
  onSubmit() {
    this.authService.addUserInfo(this.registerForm1.value)
    this.router.navigate(['/register/2'])
  }

  checkEmail = (control: AbstractControl): Observable<ValidationErrors | null> => {
    const val = control.value;
    const url = "http://localhost:4231/auth/check-email";
    return this.http.post(url, {email: val}).pipe(
      tap((_) =>{this.isLoading = true}),
      debounceTime(500),
      map((data: any) => {
        console.log(data)
        this.isLoading = false;
        if (data) {
          return {hasEmail: true};
        }
        return null;
      })
    )
  }
}
