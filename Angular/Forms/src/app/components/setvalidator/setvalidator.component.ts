import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormGroup,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-setvalidator',
  templateUrl: './setvalidator.component.html',
  styleUrls: ['./setvalidator.component.scss'],
})
export class SetvalidatorComponent implements OnInit {
  myform!: FormGroup;

  // notifyOptions: ValidteType[] = [ValidteType.Email, ValidteType.SMS];
  notifyOptions: ('Email' | 'SMS')[] = ['Email', 'SMS'];

  get notifyVia(): FormControl {
    return this.myform.get('notifyVia') as FormControl;
  }
  get email(): FormControl {
    return this.myform.get('email') as FormControl;
  }
  get mobile(): FormControl {
    return this.myform.get('mobile') as FormControl;
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.myform = this.fb.group({
      email: [''],
      mobile: [''],
      notifyVia: ['', Validators.required],
    });

    this.notifyVia?.valueChanges.subscribe((val) => {
      this.changeValidators(val);
    });
  }

  onSubmit() {
    console.log(this.myform.value);
  }

  private changeValidators(val: string) {
    if (ValidteType.Email === val) {
      this.email?.setValidators([Validators.required, Validators.email]);
      this.mobile?.clearValidators();
    } else if (val === 'SMS') {
      this.mobile?.setValidators([
        Validators.required,
        Validators.minLength(10),
      ]);
      this.email?.clearValidators();
    }

    this.email?.updateValueAndValidity();
    this.mobile?.updateValueAndValidity();
  }
}

enum ValidteType {
  Email = 'Email',
  SMS = 'SMS',
}
