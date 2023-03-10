import { Component, importProvidersFrom, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
@Component({
  selector: 'app-register-page2',
  templateUrl: './register-page2.component.html',
  styleUrls: ['./register-page2.component.css'],
  inputs: ['nextFn', 'prevFn']
})
export class RegisterPage2Component implements OnInit{
  @Input() nextFn!: Function;
  @Input() prevFn!: Function;
  @Input() updateFn!: Function;
  form!: FormGroup;
  displayErrors: boolean = false;


  constructor(private fb:FormBuilder) { }

  ngOnInit(): void { 
    this.form = this.fb.group({
      "tmdb-api": ['', [Validators.required]],
      username: ['', [Validators.required]]
    })
  }

  finish() {
    if (this.form.valid){
      this.updateFn({tmdb_key: this.form.value['tmdb-api'], username: this.form.value.username})
      this.nextFn();
    } else {
      this.displayErrors = true;
    }
  }
}
