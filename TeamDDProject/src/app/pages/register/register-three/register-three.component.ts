import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/authService/auth-service.service';

@Component({
  selector: 'app-register-three',
  templateUrl: './register-three.component.html',
  styleUrls: ['./register-three.component.css'],
})
export class RegisterThreeComponent {
  constructor(private router: Router, private authService: AuthService) {}

  // Todo: Add selector to this page
  onNext() {
    this.authService.setNewUser({ role: 'USER' });
    this.router.navigate(['/home']);
  }
}
