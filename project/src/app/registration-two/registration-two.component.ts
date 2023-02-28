import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-two',
  templateUrl: './registration-two.component.html',
  styleUrls: ['./registration-two.component.scss']
})
export class RegistrationTwoComponent {
  
  registerForm2;

  constructor(private formBuilder: FormBuilder) {
    this.registerForm2 = this.formBuilder.group({
      username: ['', [Validators.required]],
      api_key: ['', [Validators.required]]
    })
  }

  get username() {
    return this.registerForm2.get('username');
  }

  get api_key() {
    return this.registerForm2.get('api_key');
  }
  onSubmit() {

  }
}
