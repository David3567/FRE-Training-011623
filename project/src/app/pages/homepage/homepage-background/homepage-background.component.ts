import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-homepage-background',
  templateUrl: './homepage-background.component.html',
  styleUrls: ['./homepage-background.component.scss']
})
export class HomepageBackgroundComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    })
  }

  get email() {
    return this.form.get('email');
  }

  onSubmit() {
    const { jwtToken, role } = this.authService.userValue;
    if (jwtToken) {
      this.router.navigate(['/movies']);
    } else {
      this.authService.addUserInfo({email: this.email.value})
      this.router.navigate(['/register/1'])
    }
  }
}
