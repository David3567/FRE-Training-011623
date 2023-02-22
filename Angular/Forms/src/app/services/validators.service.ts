import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { debounceTime, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ValidatorsService {
  constructor(private http: HttpClient) {}

  checkEmail = (
    control: AbstractControl
  ): Observable<ValidationErrors | null> => {
    const val = control.value;
    const url = 'http://localhost:4231/auth/check-email';

    return this.http.post(url, { email: val }).pipe(
      debounceTime(500),
      map((data: any) => {
        if (data) {
          return { hasemail: true };
        }
        return null;
      })
    );
  };
}
