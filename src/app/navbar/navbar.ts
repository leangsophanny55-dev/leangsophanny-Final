import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { ThemeService } from '../services/theme'; // 👈 បន្ថែមបន្ទាត់នេះចូល!

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class NavbarComponent {

  constructor(
    private router: Router,
    public themeService: ThemeService // ពេលនេះ Error នឹងបាត់ទៅវិញភ្លាមៗ
  ) {}

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }

  logout(): void {
    localStorage.removeItem('isLoggedIn');
    this.router.navigate(['/login']);
  }
}