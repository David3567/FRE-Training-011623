import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  form: FormGroup = this.fb.group({
    name: [
      '',
      [Validators.required, Validators.minLength(5), Validators.maxLength(12)],
    ],
    email: ['', [Validators.required, Validators.email]],
    passwd: [
      '',
      [
        Validators.required,
        Validators.pattern('^(?=.*[A-Z])(?=.*[$@$!%*?&~]).{5,}'),
      ],
    ],
  });

  get name() {
    return this.form.get('name');
  }

  get email() {
    return this.form.get('email');
  }

  get passwd() {
    return this.form.get('passwd');
  }

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.form.value);
  }

  constructor(private fb: FormBuilder) {}

  // constructor(private router: Router) {
  //   this.name = '';
  //   this.email = '';
  //   this.password = '';
  // }

  // name: string;
  // email: string;
  // password: string;

  // navigateToLogin() {
  //   this.router.navigate(['/login']);
  // }
  // validateEmail() {
  //   const email = (document.querySelector('input[type="email"]') as HTMLInputElement).value;
  //   const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  //   if (re.test(String(email).toLowerCase())) {
  //     alert('Valid Email');
  //   } else {
  //     alert('Invalid Email');
  //   }
  // }

  // onSubmit() {
  //   // Get existing users from localStorage
  //   const users = JSON.parse(localStorage.getItem('users') ?? '[]');
  //   // localStorage.setItem('users', JSON.stringify([]));

  //   console.log(users); // Add this line to see the users array in the browser console

  //   // Validate inputs
  //   if (!this.name || !this.email || !this.password) {
  //     alert('Please fill in all fields.');
  //     return;
  //   }

  //   // Check if email is already taken
  //   if (users.find((user: { email: string; }) => user.email === this.email)) {
  //     alert('Email is already taken.');
  //     return;
  //   }

  //   // Add new user to users array
  //   users.push({ name: this.name, email: this.email, password: this.password });

  //   // Store users array in localStorage
  //   localStorage.setItem('users', JSON.stringify(users));
  //   alert('Registration successful!');

  //   // Redirect to login page
  //   // (You can use the Angular Router to navigate programmatically)
  // }
}
