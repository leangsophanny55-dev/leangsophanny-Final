import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './register.html',
  styleUrls: ['./register.css']
})
export class RegisterComponent {
  username: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  // ឆែកមើលថាតើបំពេញគ្រប់ Input និង Password ត្រូវគ្នាដែរឬទេ
  isFormValid(): boolean {
    const isFilled = this.username.trim() !== '' && 
                     this.email.trim() !== '' && 
                     this.password.trim() !== '' && 
                     this.confirmPassword.trim() !== '';

    const isPasswordMatched = this.password === this.confirmPassword;

    // បង្ហាញសារ Error ពេល Password និង Confirm Password មិនត្រូវគ្នា
    if (isFilled && !isPasswordMatched) {
      this.errorMessage = 'Password and Confirm Password do not match!';
    } else {
      this.errorMessage = '';
    }

    return isFilled && isPasswordMatched;
  }

  // ដំណើរការពេលចុច Register
  onRegister(): void {
    if (this.isFormValid()) {
      // Alert Success មុនពេលរត់ទៅ Login
      alert('make Account success');
      
      this.router.navigate(['/login']);
    }
  }
}