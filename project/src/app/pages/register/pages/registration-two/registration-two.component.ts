import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApplyTmdbApiKey } from 'src/app/core/core.module';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-registration-two',
  templateUrl: './registration-two.component.html',
  styleUrls: ['./registration-two.component.scss']
})
export class RegistrationTwoComponent implements OnInit {
  
  registerForm2!: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router, private authService: AuthService, @Inject(ApplyTmdbApiKey) public applyTmdbApiKey: string) {
    
  }
  ngOnInit(): void {
    this.registerForm2 = this.formBuilder.group({
      username: ['', [Validators.required]],
      tmdb_key: ['', [Validators.required, Validators.minLength(30)]]
    })
  }
  get username() {
    return this.registerForm2.get('username');
  }

  get tmdb_key() {
    return this.registerForm2.get('tmdb_key');
  }

  onSubmit() {
    this.authService.addUserInfo(this.registerForm2.value);
    this.router.navigate(['/register/3']);
  }
}
