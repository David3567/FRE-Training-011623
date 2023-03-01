import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { debounce, debounceTime, map, Observable, of } from 'rxjs';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  form!:FormGroup

  get email(): FormControl {
    return this.form.get("email") as FormControl;
  }

  constructor(private fb: FormBuilder, private http:HttpClient,
    ){

  }

  // if we have backend, adding another validator [this.checkEmail.bind(this)]
  ngOnInit(): void { 
    this.form = this.fb.group({
      email:["", [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)],]
    })
  }

  // checkEmail(control: AbstractControl): Observable<ValidationErrors | null> {
  //   const val = control.value;
  //   const url = 'http://localhost:4231/auth/check-email';

  //   return this.http.post(url, { email:val }).pipe(
  //     debounceTime(500),
  //     map((data:any) => {
  //       console.log(data)
  //       if (data) {
  //         return {hasEmail: true};
  //       }
  //       return null;
  //     })
  //   );
  // }

  onSubmit() {
    console.log();
  }

}


// interface AsyncValidatorFn {
//   (control: AbstractControl):
//     | Promise<ValidationErrors | null>
//     | Observable<ValidationErrors | null>;
// }
