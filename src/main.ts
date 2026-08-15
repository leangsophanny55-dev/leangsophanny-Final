import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';

// 1. Import AppComponent
import { AppComponent } from './app/app'; // ប្រសិនបើ file ឈ្មោះ app.ts
// ឬ: import { AppComponent } from './app/app.component'; // ប្រសិនបើ file ឈ្មោះ app.component.ts

// 2. Import routes
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes)
  ]
}).catch(err => console.error(err));