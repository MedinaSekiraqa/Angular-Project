import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {
    // Check email and password
    if (this.email ==='medina@gmail.com' && this.password === 'medina123') {
      // Successful login
      alert('Login successful!');
      this.router.navigate(['/home']); // Redirect to home page
    } else {
      // Invalid email or password
      alert('Invalid email or password');
    }
  }
}
