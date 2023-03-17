import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
//   onNext() {
//     this.authService.setNewUser({ role: 'USER' });
//     this.authService.registerUser().subscribe();
//     // this.authService.clearNewUser();
//     this.router.navigate(['/home']);
//   }
export class RegisterThreeComponent {
  myRole: string = 'USER';
  constructor(private authService: AuthService) {}

  onSelect(plan: string): void {
    if (plan === 'Basic with ads') {
      this.myRole = 'USER';
    } else if (plan === 'Standard') {
      this.myRole = 'SUPER';
    } else if (plan === 'Premium') {
      this.myRole = 'ADMIN';
    }
  }

  onNext(): void {
    if (this.myRole) {
      const localRole = localStorage.getItem('role');
      console.log(localRole);
      //   if (!localRole) {
      //     // User not registered
      //     this.authService.registerUser({ role: this.myRole }).subscribe(() => {
      //       localStorage.setItem('role', this.myRole);
      //     });
      //   } else {
      //     // User already registered
      //     if (localRole !== this.myRole) {
      //       this.authService.updateRole({ role: this.myRole }).subscribe(() => {
      //         localStorage.setItem('role', this.myRole);
      //       });
      //     }
      //   }
    }
  }
}
