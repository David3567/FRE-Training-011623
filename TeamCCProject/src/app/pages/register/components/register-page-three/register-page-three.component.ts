import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/service/authService/auth-service.service';
import { Plans } from 'src/app/service/interface/movie-interface';

@Component({
  selector: 'app-register-page-three',
  templateUrl: './register-page-three.component.html',
  styleUrls: ['./register-page-three.component.scss']
})
export class RegisterPageThreeComponent implements OnInit{ 
  select: string = 'Basic with ads'
  eachPlans: Plans[] =  [
    {
      name: 'Basic with ads',
      price: 6.99,
      quality: 'Good',
      resolution: '720p',
      downLoad: false,
      select : true,
    },
    {
      name: 'Standard',
      price: 15.49,
      quality: 'Better',
      resolution: '1080p',
      downLoad: true,
      select : false,
    },
    {
      name: 'Premium',
      price: 19.99,
      quality: 'Best',
      resolution: '4K + HDR',
      downLoad: true,
      select : false,
    }
  ]
  constructor(private router: Router, private userServer:AuthServiceService){}
  ngOnInit(): void {
    const LocalRole = localStorage.getItem("role");
    let myRole;
    if(LocalRole !== null){
      if(LocalRole === 'ADMIN'){
        myRole = 'Premium';
      }
      else if(LocalRole === 'SUPERUSER'){
        myRole = 'Standard';
      }
      else{
        myRole = 'Basic with ads';
      }
      this.changeSelect(myRole);
    }
  }
  category : string[] = ['Monthly Price', 'Video quality', 'Resolution', 'Watch on your TV, computer, mobile phone and tablet', 'Downloads']
  changeSelect(namep: string){
    this.select = namep;
    this.eachPlans.forEach((ele)=>{
      if(ele.name === this.select){
        ele.select = true;
      }
      else{
        ele.select = false;
      }
    })
  }
  onNext(){
    let myRole = ''
    if(this.select === 'Basic with ads'){
      myRole = 'USER';
    }
    else if(this.select === 'Standard'){
      myRole = 'SUPERUSER';
    }
    else{
      myRole = 'ADMIN';
    }
    const LocalRole = localStorage.getItem("role");
    if(LocalRole !== null){
      this.userServer.updateRole({role: myRole}).subscribe();
      // console.log("local")
    }
    else{
      this.userServer.sighup({role: myRole}).subscribe();
      // console.log("null Local")
    }
  }
}
