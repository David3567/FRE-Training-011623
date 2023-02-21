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

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    console.log();
  }
}
