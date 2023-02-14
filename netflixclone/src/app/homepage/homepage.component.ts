import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  

// imageUrl="https://assets.nflxext.com/ffe/siteui/vlv3/1ecf18b2-adad-4684-bd9a-acab7f2a875f/b917d571-224d-40fa-b55d-d20cc293f4c0/US-en-20230116-popsignuptwoweeks-perspective_alpha_website_large.jpg"
message ="Unlimited movies, TV shows, and more.";
validateEmail() {
  const email = (document.querySelector('input[type="email"]') as HTMLInputElement).value;
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (re.test(String(email).toLowerCase())) {
    alert('Valid Email');
    this.router.navigate(['/register']);
  } else {
    alert('Invalid Email');
  }
}
constructor(private router: Router) {}

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

}
