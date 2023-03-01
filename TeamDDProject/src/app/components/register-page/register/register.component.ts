import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  registerForm1!: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.registerForm1 = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
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
}
