import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/authService/auth-service.service';

@Component({
  selector: 'app-register-two',
  templateUrl: './register-two.component.html',
  styleUrls: ['./register-two.component.css'],
})
export class RegisterTwoComponent implements OnInit {
  registerForm2!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}
  get username() {
    return this.registerForm2.get('username') as FormControl;
  }

  get tmdb_key() {
    return this.registerForm2.get('tmdbApiKey') as FormControl;
  }
  ngOnInit() {
    this.registerForm2 = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(6)]],
      tmdb_key: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  onNext() {
    this.authService.setNewUser(this.registerForm2.value);
    this.router.navigate(['/register/3']);
  }
}
