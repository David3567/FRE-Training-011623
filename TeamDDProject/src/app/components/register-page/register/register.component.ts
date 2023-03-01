import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  registerForm1!: FormGroup;
  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.registerForm1 = this.formBuilder.group({
      email: [
        '',
        {
          validators: [Validators.required, Validators.email],
          asyncValidators: [this.emailExistsValidator.bind(this)],
          updateOn: 'blur',
        },
      ],
      password: ['', Validators.required],
    });
  }
  get email() {
    return this.registerForm1.get('email');
  }

  get password() {
    return this.registerForm1.get('password');
  }

  onSubmit() {
    console.log(this.registerForm1.value);
  }

  checkEmailExists(email: string): Observable<boolean> {
    return this.http.get<any>(`/auth/check-email?email=${email}`).pipe(
      map((response) => {
        return response.exists;
      })
    );
  }
  emailExistsValidator(
    control: AbstractControl
  ): Observable<{ [key: string]: any } | null> {
    return this.checkEmailExists(control.value).pipe(
      map((exists) => {
        return exists ? { emailExists: true } : null;
      })
    );
  }
}
