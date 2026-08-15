import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService, Product } from '../services/product';
import { CartService } from '../services/cart';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent implements OnInit {
  // កំណត់ 'home' ជាតម្លៃដើម ដើម្បីឱ្យ Home Page និង Carousel បង្ហាញភ្លាមៗពេលបើក Web
  selectedMenu: string = 'home';
  
  // Array សម្រាប់ផ្ទុកទិន្នន័យផលិតផលទាញចេញពី C# API
  products: Product[] = [];
  isLoading: boolean = false;
  errorMessage: string = '';

  constructor(
    private productService: ProductService, 
    private cartService: CartService, 
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  // មុខងារទាញយកទិន្នន័យផលិតផលពី API
  loadProducts(): void {
    this.isLoading = true;
    this.productService.getProducts().subscribe({
      next: (data: Product[]) => {
        this.products = data;
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        this.errorMessage = 'Failed to load products from API.';
        this.isLoading = false;
        this.cdr.detectChanges();
        console.error(err);
      }
    });
  }

  // មុខងារសម្រាប់ដូរ Menu លើ Navbar
  selectMenu(menu: string): void {
    this.selectedMenu = menu;
  }

  // កែប្រែមកជា any ដើម្បីការពារកុំឱ្យចេញ Error ពេលបញ្ជូនទិន្នន័យពី HTML
  addToCart(product: any): void {
    this.cartService.addToCart(product);
    alert(`Added"${product.productName || 'Product'}" in cart by successful`);
  }
}