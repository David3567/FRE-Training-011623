import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { Observable, of, Subject } from 'rxjs';
import { debounceTime, map, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { ValidatorsService } from 'src/app/services/validators.service';

@Component({
  selector: 'app-crossieldvalidation',
  templateUrl: './crossieldvalidation.component.html',
  styleUrls: ['./crossieldvalidation.component.scss'],
})
export class CrossieldvalidationComponent implements OnInit {
  form!: FormGroup;

  get email(): FormControl {
    return this.form.get('email') as FormControl;
  }
  // get pwd(): FormGroup {
  //   return this.form.get('pwd') as FormGroup;
  // }

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private validatorsService: ValidatorsService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: [
        '',
        [
          this.minLen(5),
          // Validators.minLength(5)
          // Validators.required,
          // Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/),
        ],
        [this.validatorsService.checkEmail],
      ],

      // pwd: this.fb.group(
      //   {
      //     password: '',
      //     confirm: '',
      //   },
      //   {
      //     validators: [this.matchPwd],
      //   }
      // ),
    });
  }

  minLen(limitednum: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.value.length < limitednum) {
        return { minlen: true };
      }
      return null;
    };
  }

  // matchPwd(group: FormGroup): ValidationErrors | null {
  //   const pwdval = group.get('password')?.value;
  //   const cfmval = group.get('confirm')?.value;

  //   console.log(pwdval, cfmval);
  //   if (pwdval === cfmval) {
  //     return null;
  //   }
  //   return { pwdNoMatch: true };
  // }

  onSubmit() {
    console.log();
  }
}

interface ValidatorFn {
  (control: AbstractControl): ValidationErrors | null;
}

interface AsyncValidatorFn {
  (control: AbstractControl):
    | Promise<ValidationErrors | null>
    | Observable<ValidationErrors | null>;
}
