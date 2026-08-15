import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: Product[] = [];

  constructor() {}

  // បន្ថែមទំនិញចូលកន្ត្រក
  addToCart(product: Product) {
    this.cartItems.push(product);
  }

  // ទាញយកទំនិញទាំងអស់ក្នុងកន្ត្រក
  getCartItems(): Product[] {
    return this.cartItems;
  }

  // លុបទំនិញចេញតាម Index
  removeItem(index: number) {
    this.cartItems.splice(index, 1);
  }
}