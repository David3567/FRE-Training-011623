import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-two',
  templateUrl: './registration-two.component.html',
  styleUrls: ['./registration-two.component.scss']
})
export class RegistrationTwoComponent implements OnInit {
  
  registerForm2!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    
  }
  ngOnInit(): void {
    this.registerForm2 = this.formBuilder.group({
      username: ['', [Validators.required]],
      api_key: ['', [Validators.required, Validators.minLength(30)]]
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
