import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/service/authService/auth-service.service';

@Component({
  selector: 'app-register-page-two',
  templateUrl: './register-page-two.component.html',
  styleUrls: ['./register-page-two.component.scss']
})
export class RegisterPageTwoComponent implements OnInit{
  RegisterFormTwo!: FormGroup;

  constructor(private fb: FormBuilder, private router:Router, private userServer:AuthServiceService) {};
  
  get RegistUsername(){
    return this.RegisterFormTwo.get('username') as FormControl;
  }
  get RegistTmdb(){
    return this.RegisterFormTwo.get('tmdb_key') as FormControl;
  }


  ngOnInit(){
    this.RegisterFormTwo = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(6)]],
      tmdb_key: ['', [Validators.required, Validators.minLength(6)]],
    })
  }
  onNext(){
    this.userServer.addNewUser(this.RegisterFormTwo.value);
    this.router.navigate(['/register/step3']);
  }
}
