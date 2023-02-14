import { Component } from '@angular/core';
import { Plans } from '../plans';

@Component({
  selector: 'app-register-page-three',
  templateUrl: './register-page-three.component.html',
  styleUrls: ['./register-page-three.component.scss']
})
export class RegisterPageThreeComponent { 
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
}
