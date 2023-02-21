import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { Observable, of } from 'rxjs';
import { debounceTime, map, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-crossieldvalidation',
  templateUrl: './crossieldvalidation.component.html',
  styleUrls: ['./crossieldvalidation.component.scss'],
})
export class CrossieldvalidationComponent implements OnInit {
  form!: FormGroup;
  pwdNotMatch = 'pwdNotMatch';

  get email(): FormControl {
    return this.form.get('email') as FormControl;
  }
  get pwd(): FormGroup {
    return this.form.get('pwd') as FormGroup;
  }

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [], [this.asyncCheckEmail]],
      pwd: this.fb.group(
        {
          password: ['', [this.minlen(15)]],
          confirm: [''],
        },
        {
          validators: [this.matchPwd],
        }
      ),
    });

    // this.email.valueChanges.pipe(switchMap).subscribe((val) => {
    //   console.log(val);
    // });
  }

  onSubmit() {
    console.log(this.form.value);
  }

  private asyncCheckEmail = (
    control: FormControl
  ): Observable<ValidationErrors | null> => {
    const url = 'http://localhost:4231/auth/check-email';
    const value: string = control.value;

    return this.http.post(url, { email: value }).pipe(
      debounceTime(500),
      map((data: any) => {
        if (data) {
          return { hasemail: true };
        }
        return null;
      })
    );
  };

  private minlen(limitednum: number): ValidatorFn {
    return function (control: AbstractControl): ValidationErrors | null {
      if (control.value.length < limitednum) {
        return {
          minlen: true,
          requiredLength: limitednum,
        };
      }
      return null;
    };
  }

  private matchPwd = (group: FormGroup): ValidationErrors | null => {
    const pwdval = group.get('password')?.value;
    const cfmval = group.get('confirm')?.value;

    if (pwdval !== cfmval) {
      return { [this.pwdNotMatch]: true };
    }
    return null;
  };
}
interface ValidatorFn {
  (control: AbstractControl): ValidationErrors | null;
}

interface AsyncValidatorFn {
  (control: AbstractControl):
    | Promise<ValidationErrors | null>
    | Observable<ValidationErrors | null>;
}
