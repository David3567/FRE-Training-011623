import { Component, importProvidersFrom, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register-page2',
  templateUrl: './register-page2.component.html',
  styleUrls: ['./register-page2.component.css'],
  inputs: ['nextFn', 'prevFn'],
  standalone: true,
  imports: [FormsModule]
})
export class RegisterPage2Component {
  @Input() nextFn!: Function;
  @Input() prevFn!: Function;
  @Input() updateFn!: Function;
  api: string = "";
  username: string = "";

  validate () {
    return true;
  }

  finish() {
    if (this.validate()) {
      this.updateFn({tmbd_key: this.api, username: this.username})
      this.nextFn();
    }
  }
}
