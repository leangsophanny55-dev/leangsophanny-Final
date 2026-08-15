import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ProductService, Product } from '../services/product';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class ProductsComponent implements OnInit { 
  products: Product[] = [];
  filteredProducts: Product[] = [];
  paginatedProducts: Product[] = [];
  isLoading: boolean = false;
  errorMessage: string = '';
  searchTerm: string = '';
  selectedCategory: string = '';
  categories: string[] = ['Electronic', 'Makeup', 'clothing' , 'shoes' , 'skincare'];
  currentPage: number = 1;
  
  // កែប្រែ itemsPerPage មកជា 5 វិញ (បង្ហាញ 5 ផលិតផលក្នុងមួយទំព័រ)
  itemsPerPage: number = 5; 
  totalPages: number = 1;
  
  showModal: boolean = false;
  isEditing: boolean = false;
  currentProduct: Product = this.getEmptyProduct();

  constructor(private productService: ProductService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.isLoading = true;
    this.productService.getProducts().subscribe({
      next: (data: Product[]) => {
        this.products = data;
        this.onSearchOrFilterChange();
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.errorMessage = 'Failed to load products.';
        this.isLoading = false;
        this.cdr.detectChanges();
      }
    });
  }

  onSearchOrFilterChange(): void {
    let result = [...this.products];

    // Search by Product ID or Product Name
    if (this.searchTerm && this.searchTerm.trim()) {
      const term = this.searchTerm.trim().toLowerCase();
      result = result.filter(p => 
        (p.productName && p.productName.toLowerCase().includes(term)) || 
        (p.productID && p.productID.toString().includes(term))
      );
    }

    // Filter by Category Name
    if (this.selectedCategory && this.selectedCategory.trim() !== '') {
      result = result.filter(p => p.categoryName === this.selectedCategory);
    }

    this.filteredProducts = result;
    this.currentPage = 1;
    this.updatePagination();
  }

  updatePagination(): void {
    this.totalPages = Math.max(1, Math.ceil(this.filteredProducts.length / this.itemsPerPage));
    if (this.currentPage > this.totalPages) {
      this.currentPage = this.totalPages;
    }
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.paginatedProducts = this.filteredProducts.slice(start, end);
    this.cdr.detectChanges();
  }

  setPage(page: number): void {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
    this.updatePagination();
  }

  openAddModal(): void { 
    this.isEditing = false; 
    this.currentProduct = this.getEmptyProduct(); 
    this.showModal = true; 
  }

  openEditModal(p: Product): void { 
    this.isEditing = true; 
    this.currentProduct = { ...p }; 
    this.showModal = true; 
  }

  closeModal(): void { 
    this.showModal = false; 
  }

  calculateAmount(): void { 
    this.currentProduct.amount = (this.currentProduct.quantity || 0) * (this.currentProduct.price || 0); 
  }

  saveProduct(): void {
    this.calculateAmount();
    const action = this.isEditing 
      ? this.productService.updateProduct(this.currentProduct.productID!, this.currentProduct) 
      : this.productService.addProduct(this.currentProduct);

    action.subscribe({ 
      next: () => { 
        this.loadProducts(); 
        this.closeModal(); 
      } 
    });
  }

  deleteProduct(id?: number): void {
    if (!id) return;
    if (confirm('Are you sure to delete this product?')) {
      this.productService.deleteProduct(id).subscribe({ 
        next: () => { 
          this.loadProducts(); 
        } 
      });
    }
  }

  private getEmptyProduct(): Product {
    return { 
      productName: '', 
      quantity: 0, 
      price: 0, 
      amount: 0, 
      description: '', 
      categoryName: '', 
      image: '' 
    };
  }
}