import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Router } from '@angular/router';

import { NavbarComponent } from './navbar/navbar';
import { FooterComponent } from './footer/footer';
import { ProductService, Product } from './services/product';
import { CartService } from './services/cart'; // 🟢 បន្ថែម CartService

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,    
    RouterOutlet,    
    NavbarComponent,
    FooterComponent   
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent implements OnInit {
  selectedMenu: string = 'home';
  products: Product[] = []; // Array សម្រាប់ផ្ទុកទិន្នន័យផលិតផលបានពី API

  // Inject Router, ProductService និង CartService ចូលក្នុង Constructor
  constructor(
    public router: Router,
    private productService: ProductService,
    private cartService: CartService // 🟢 បញ្ចូល CartService ទីនេះ
  ) {}

  ngOnInit() {
    this.fetchProducts();
  }

  // មុខងារសម្រាប់ទាញយកទិន្នន័យផលិតផលពី C# API
  fetchProducts() {
    this.productService.getProducts().subscribe({
      next: (data: Product[]) => {
        this.products = data; 
        console.log('Products loaded successfully from API:', this.products);
      },
      error: (err: any) => {
        console.error('Error fetching products from API:', err);
      }
    });
  }

  // 🟢 មុខងារសម្រាប់បញ្ជូនទំនិញចូលទៅក្នុងកន្ត្រក (Cart)
  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }

  // Function សម្រាប់ពិនិត្យមើលថា ត្រូវបង្ហាញ Navbar និង Footer ឬទេ
  showNavbar(): boolean {
    const currentUrl = this.router.url;
    return !currentUrl.includes('/login') && !currentUrl.includes('/register');
  }
}