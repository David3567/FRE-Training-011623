import { Component, Input, isStandalone, Output, NgModule, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-page1',
  templateUrl: './register-page1.component.html',
  styleUrls: ['./register-page1.component.css'],
  inputs: ['nextFn', 'prevFn']
})
export class RegisterPage1Component implements OnInit {
  form!: FormGroup;
  password: string = '';
  confirm_password: string = "";
  @Input() nextFn!: Function;
  @Input() prevFn!: Function;
  @Input() updateFn!: Function;
  displayErrors: boolean = false;



  constructor(private fb:FormBuilder) { }

  ngOnInit(): void { 
    this.form = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirm_password: ['', [Validators.required, Validators.minLength(8) ]]
    }, {validator: this.validate.bind(this)})
  }

  validate(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password');
    const confirm_password = control.get('confirm_password');
    if (password?.value !== confirm_password?.value) {
      return {passwordsDontMatch: true};
    }
    return null;
  }
  finish () {
    if (this.form.valid) {
      this.updateFn({password: this.form.value.password})
      this.nextFn();
    } else {
      this.displayErrors = true;
    }
  }
}
