import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { HttpClient } from '@angular/common/http';
import { AsyncValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Component({
  selector: 'app-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class AppComponent implements OnInit {
  clicked = false;
  loginForm!: FormGroup;

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  checkEmailExistence(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      const email = control.value;
      return this.http.get<{ exists: boolean }>(`/auth/check-email?email=${email}`).pipe(
        map((res) => (res.exists ? { emailExists: true } : null))
      );
    };
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email], this.checkEmailExistence()],
      password: ['', Validators.required]
    });
    // this.email?.markAsUntouched();
  }

  onSubmit() {
    const credencialSignIn = {
      email: this.email?.value ?? '',
      password: this.password?.value,
    };
  }
}
