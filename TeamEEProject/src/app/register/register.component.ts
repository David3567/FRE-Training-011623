import { Component, Inject } from '@angular/core';

interface signupData {
 [key: string]: string
  username: string;
  password: string;
  email: string;
  role: string;
  tmbd_key: string;
}


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
    data: signupData = {
      username: "",
      password: "",
      email: "",
      role: "",
      tmbd_key: ""
    }
    screen: number = 1;

    constructor() { 
      this.next_screen = this.next_screen.bind(this);
      this.prev_screen = this.prev_screen.bind(this);
      this.update_data = this.update_data.bind(this);
    }

    next_screen() {
      if (this.screen < 3) {
        this.screen += 1;
    }
  }

    prev_screen() {
      if (this.screen > 1) {
        this.screen -= 1;
      }
    }

    update_data(inputData : {[key: string]: string}) {
      for (let key of Object.keys(inputData)) {
        this.data[key] = inputData[key];
      }
      console.log(this.data);
    }
    
    submit_form() {
      console.log(this.data);
    }

}
