import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

interface Plan {
  [key: string]: string | number | boolean;
}

@Component({
  selector: 'app-userrole',
  templateUrl: './userrole.component.html',
  styleUrls: ['./userrole.component.css']
})
export class UserroleComponent {
  @Input() nextFn!: Function;
  @Input() prevFn!: Function;
  @Input() updateFn!: Function;
  @Input() submitFn!: Function;

  planSelection: number = 0;

  constructor(private authService: AuthService) { }

  planFeatures = [
    ["price", "Monthly price"],
    ["quality","Video quality"],
    ["resolution", "Video resolution"],
    ["watch", "Watch on any device"],
    ["downloads", "Download videos"]
  ]
  planToEnum : {[key:string]:string}= { "Basic with ads": "USER", "Standard": "SUPERUSER", "Premium": "ADMIN" };

  plans: Plan[] = [
    {
      name: "Basic with ads",
      price: 6.99,
      quality: "Good",
      resolution: "720p",
      watch: true,
      downloads: false
    },
    {
      name: "Standard",
      price: 9.99,
      quality: "Good",
      resolution: "720p",
      watch: true,
      downloads: true
    },
    {
      name: "Premium",
      price: 14.99,
      quality: "Good",
      resolution: "720p",
      watch: true,
      downloads: true
    }
  ];

  select(newSelection : number) {
    this.planSelection = newSelection;
    console.log(this.planSelection)
  }
  isSelected(test:number) {
    if (this.planSelection === test) {
      return true;
    }
    return false;
  }

  formatValue(value: string | number | boolean) {
    if (typeof value === "boolean") {
      if (value) {
        return '<span class="check">✓</span>';
      }
      return '<span class="check">-</span>';
    } else if (typeof value === "number") {
      return "$" + value;
    }
    return value;
  }

  finish() {
    const plan: string = this.plans[this.planSelection]['name'] as string;
    this.authService.updateRole(this.planToEnum[plan]);
  }
}
