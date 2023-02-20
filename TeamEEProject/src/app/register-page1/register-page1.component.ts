import { Component, Input, isStandalone, Output, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register-page1',
  templateUrl: './register-page1.component.html',
  styleUrls: ['./register-page1.component.css'],
  inputs: ['nextFn', 'prevFn'],
  imports: [FormsModule],
  standalone: true
})
export class RegisterPage1Component {
  password: string = '';
  confirm_password: string = "";
  @Input() nextFn!: Function;
  @Input() prevFn!: Function;
  @Input() updateFn!: Function;

  validate () {
    if (this.password === this.confirm_password) {
      console.log("Passwords match");
      return true;
    }
    else {
      console.log("Passwords do not match");
      return false;
    }
  }
  finish () {
    if (this.validate()) {
      this.updateFn({password: this.password})
      this.nextFn();
    }
  }
}
