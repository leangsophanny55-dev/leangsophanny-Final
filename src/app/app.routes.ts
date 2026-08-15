import { Routes } from '@angular/router';
// 1. Import Components (សូមផ្ទៀងផ្ទាត់ Path ឲ្យបានត្រឹមត្រូវតាម Project របស់អ្នក)
import { HomeComponent } from './home/home';
import { ProductsComponent } from './products/products';
import { DealsComponent } from './deals/deals';
import { AboutComponent } from './about/about';
import { LoginComponent } from './login/login';
import { RegisterComponent } from './register/register'; 

// 2. Import AuthGuard សម្រាប់ការពារ Routes
import { authGuard } from './auth-guard'; 

export const routes: Routes = [
  // នៅពេលចូលមកដំបូង ឲ្យរត់ទៅកាន់ Page Login មុនគេ
  { path: '', redirectTo: 'login', pathMatch: 'full' }, 
  
  // Public Routes (អ្នកណាក៏អាចចូលមើលបានដែរ)
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  // Protected Routes (ទាមទារឲ្យ Login រួចសិន ទើបអាចចូលបាន តាមរយៈ authGuard)
  { path: 'home', component: HomeComponent, canActivate: [authGuard] },
  { path: 'products', component: ProductsComponent, canActivate: [authGuard] },
  { path: 'deals', component: DealsComponent, canActivate: [authGuard] },
  { path: 'about', component: AboutComponent, canActivate: [authGuard] },

  // Wildcard Route (ប្រសិនបើវាយ URL ខុស វានឹងបញ្ជូនត្រឡប់ទៅកាន់ Page Login វិញ)
  { path: '**', redirectTo: 'login' }
];