import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-two',
  templateUrl: './register-two.component.html',
  styleUrls: ['./register-two.component.css'],
})
export class RegisterTwoComponent {
  registerForm2!: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.registerForm2 = this.formBuilder.group({
      username: ['', [Validators.required]],
      tmdbApiKey: ['', Validators.required],
    });
  }
  get username() {
    return this.registerForm2.get('username');
  }

  get tmdbApiKey() {
    return this.registerForm2.get('tmdbApiKey');
  }

  onSubmit() {
    console.log(this.registerForm2.value);
  }
}
