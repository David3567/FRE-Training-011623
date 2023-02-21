import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-setvalidator',
  templateUrl: './setvalidator.component.html',
  styleUrls: ['./setvalidator.component.scss'],
})
export class SetvalidatorComponent implements OnInit {
  myform!: FormGroup;

  notifyOptions = ['Email', 'SMS'];

  get notifyVia() {
    return this.myform.get('notifyVia');
  }
  get email() {
    return this.myform.get('email');
  }
  get mobile() {
    return this.myform.get('mobile');
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
    if (val === 'Email') {
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
