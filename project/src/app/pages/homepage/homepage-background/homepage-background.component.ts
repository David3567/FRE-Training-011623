import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage-background',
  templateUrl: './homepage-background.component.html',
  styleUrls: ['./homepage-background.component.scss']
})
export class HomepageBackgroundComponent implements OnInit {
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    })
  }

  get email() {
    return this.form.get('email');
  }

  onSubmit() {
    this.router.navigate(['/register/1'])
  }
}
