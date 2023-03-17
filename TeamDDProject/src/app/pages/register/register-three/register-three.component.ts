import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/authService/auth-service.service';
import { Plans } from 'src/app/services/interface/movie-interface';

@Component({
  selector: 'app-register-three',
  templateUrl: './register-three.component.html',
  styleUrls: ['./register-three.component.css'],
})
// export class RegisterThreeComponent {
//   constructor(private router: Router, private authService: AuthService) {}

//   // Todo: Add selector to this page
//   myRole = 'USER';
//   onNext() {
//     this.authService.setNewUser({ role: 'USER' });
//     this.authService.registerUser({ role: this.myRole }).subscribe();
//     // this.authService.clearNewUser();
//     this.router.navigate(['/home']);
//   }
// }
export class RegisterThreeComponent implements OnInit {
  referer: string | null = null;
  select: string = 'Basic with ads';
  eachPlans: Plans[] = [
    {
      name: 'Basic with ads',
      price: 6.99,
      quality: 'Good',
      resolution: '720p',
      downLoad: false,
      select: true,
    },
    {
      name: 'Standard',
      price: 15.49,
      quality: 'Better',
      resolution: '1080p',
      downLoad: true,
      select: false,
    },
    {
      name: 'Premium',
      price: 19.99,
      quality: 'Best',
      resolution: '4K + HDR',
      downLoad: true,
      select: false,
    },
  ];
  constructor(
    private router: Router,
    private authService: AuthService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.referer = this.route.snapshot.paramMap.get('referer');
    const LocalRole = localStorage.getItem('role');
    let myRole;
    if (LocalRole !== null) {
      if (LocalRole === 'ADMIN') {
        myRole = 'Premium';
      } else if (LocalRole === 'SUPERUSER') {
        myRole = 'Standard';
      } else {
        myRole = 'Basic with ads';
      }
      this.changeSelect(myRole);
    }
  }
  category: string[] = [
    'Monthly Price',
    'Video quality',
    'Resolution',
    'Watch on your TV, computer, mobile phone and tablet',
    'Downloads',
  ];
  changeSelect(namep: string) {
    this.select = namep;
    this.eachPlans.forEach((ele) => {
      if (ele.name === this.select) {
        ele.select = true;
      } else {
        ele.select = false;
      }
    });
  }
  onNext() {
    let myRole = '';
    if (this.select === 'Basic with ads') {
      myRole = 'USER';
    } else if (this.select === 'Standard') {
      myRole = 'SUPERUSER';
    } else {
      myRole = 'ADMIN';
    }
    const LocalRole = localStorage.getItem('role');

    if (this.referer !== null) {
      this.authService.updateRole({ role: myRole }).subscribe();
      console.log('local');
    } else {
      this.authService.registerUser({ role: myRole }).subscribe();
      console.log('null Local', this.referer);
    }
  }
}
