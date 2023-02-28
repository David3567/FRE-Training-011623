import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-one',
  templateUrl: './registration-one.component.html',
  styleUrls: ['./registration-one.component.scss']
})
export class RegistrationOneComponent {
  registerForm1;
  constructor(private formBuilder: FormBuilder) {
    this.registerForm1 = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
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

  }
}
