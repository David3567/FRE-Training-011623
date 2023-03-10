import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { signupData } from 'src/app/interfaces/signupData';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
    data: signupData = {
      username: "",
      password: "",
      email: "",
      role: "",
      tmdb_key: ""
    }
    screen: number = 1;

    constructor(private http: HttpClient, @Inject('API_BASE_URL') private baseUrl: string, private authService: AuthService, private router: Router, private route: ActivatedRoute) { 
      this.next_screen = this.next_screen.bind(this);
      this.prev_screen = this.prev_screen.bind(this);
      this.update_data = this.update_data.bind(this);
      this.submit_form = this.submit_form.bind(this);
    }

    ngOnInit(): void {
      this.route.queryParams.subscribe(params => {
        if (params['email']) { this.data.email = params['email']; }
        console.log(params)
      });
    }

    next_screen() {
      if (this.screen < 3) {
        this.screen += 1;
    }
  }

    prev_screen() {
      if (this.screen > 1) {
        this.screen -= 1;
      }
    }

    update_data(inputData : {[key: string]: string}) {
      for (let key of Object.keys(inputData)) {
        this.data[key] = inputData[key];
      }
      console.log(this.data);
    }
    
    submit_form() {
      console.log(this.data)
      this.authService.registerUser(this.data).subscribe((data: any) => {
        console.log(data);
        this.router.navigate(['/movielist']);
      });
    }
}
