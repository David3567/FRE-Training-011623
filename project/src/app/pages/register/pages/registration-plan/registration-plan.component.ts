import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UserRole } from 'src/app/services/interfaces/user-auth.interface';

@Component({
  selector: 'app-registration-plan',
  templateUrl: './registration-plan.component.html',
  styleUrls: ['./registration-plan.component.scss']
})
export class RegistrationPlanComponent {
  selecedColumn: 'USER' | 'SUPERUSER' | 'ADMIN' = 'ADMIN';

  constructor(private readonly authService: AuthService) {}

  selectPlan(user: 'USER' | 'SUPERUSER' | 'ADMIN') {
    this.selecedColumn = user;
  }
  handleNavigate() {
    const { jwtToken } = this.authService.userValue;
    if (jwtToken) {
      this.authService.upgradePermission({role: UserRole[this.selecedColumn]}).subscribe()
    } else {
      this.authService.signup({ role: UserRole[this.selecedColumn] }).subscribe();
    }
  }
}
