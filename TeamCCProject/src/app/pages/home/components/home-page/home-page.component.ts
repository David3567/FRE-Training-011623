import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/service/authService/auth-service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit{
  emailInput!: FormGroup;

  constructor(private fb:FormBuilder, private router: Router, private userServer: AuthServiceService){}

  ngOnInit(){
    this.emailInput = this.fb.group({
      email: ['']
    })
  }
  onNext(){
    // console.log(this.emailInput.value)
    this.userServer.addNewUser(this.emailInput.value);
    this.router.navigate(['/register/step1'])
  }
}
