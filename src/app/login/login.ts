import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  // ឆែកមើលថាតើបានបំពេញ Field ទាំងពីររួចរាល់ហើយឬនៅ
  isFormValid(): boolean {
    return this.username.trim() !== '' && this.password.trim() !== '';
  }

  // ដំណើរការពេលចុច Login
  onLogin(): void {
    if (this.isFormValid()) {
      localStorage.setItem('isLoggedIn', 'true');
      alert('Login Successful!');
      this.router.navigate(['/home']);
    }
  }

  // ដំណើរការពេលចុច Reset
  onReset(): void {
    this.username = '';
    this.password = '';
  }
}