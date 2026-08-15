import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private isDarkMode: boolean = false;

  constructor() {
    // ឆែកមើលប្រវត្តិដែលអ្នកប្រើយកក្នុង LocalStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      this.enableDarkMode();
    } else {
      this.enableLightMode();
    }
  }

  // ត្រួតពិនិត្យថាតើកំពុងប្រើ Dark Mode ឬអត់
  get isDark(): boolean {
    return this.isDarkMode;
  }

  // ប្តូរ Mode ចុះឡើង (Toggle)
  toggleTheme(): void {
    if (this.isDarkMode) {
      this.enableLightMode();
    } else {
      this.enableDarkMode();
    }
  }

  private enableDarkMode(): void {
    this.isDarkMode = true;
    document.body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark');
  }

  private enableLightMode(): void {
    this.isDarkMode = false;
    document.body.classList.remove('dark-mode');
    localStorage.setItem('theme', 'light');
  }
}