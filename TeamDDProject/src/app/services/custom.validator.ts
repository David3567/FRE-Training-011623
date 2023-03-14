import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import { debounceTime, map, Observable, switchMap, take, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomValidator {
  constructor(private http: HttpClient) {}

  //An asynchronous call to a server to check if a value exists or not
  emailExists(obj: any): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      const email = control.value;
      return control.valueChanges.pipe(
        tap((_) => {
          console.log(email);
          obj.isLoading = true; //
        }),
        debounceTime(200),
        switchMap((_) => {
          return this.http.post<boolean>(
            'http://localhost:4231/auth/check-email',
            { email }
          );
        }),
        map((result: boolean) => {
          obj.isLoading = false; //
          console.log(email + 'validatinggggg');
          return result ? { emailExists: true } : null;
        }),
        take(1)
      );
    };
  }

  // testValidator(obj: any): AsyncValidatorFn {
  //   return (control: AbstractControl): Observable<ValidationErrors | null> => {
  //     const email = control.value;
  //     return control.valueChanges.pipe(
  //       tap((_) => {
  //         console.log(email + 'validator works');
  //       })
  //     );
  //   };
  // }
}
