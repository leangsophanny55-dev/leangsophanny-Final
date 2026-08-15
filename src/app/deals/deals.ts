import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Deal } from '../deal/deal';
import { ProductService } from '../services/product';

@Component({
  selector: 'app-deals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './deals.html',
  styleUrl: './deals.css'
})
export class DealsComponent implements OnInit {
  dealItems: Deal[] = [];
  isLoading: boolean = false;
  errorMessage: string = '';

  constructor(
    private productService: ProductService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadDeals();
  }

  loadDeals(): void {
    this.isLoading = true;
    this.productService.getProducts().subscribe({
      next: (data: any[]) => {
        if (Array.isArray(data)) {
          this.dealItems = data.map((item, index) => ({
            id: item.productID || index + 1,
            title: item.productName || 'No Name',
            image: item.image ? 'https://localhost:7234/images/' + item.image : 'card10.png',
            discount: '-30%',
            rating: 4.5,
            originalPrice: item.price ? item.price * 1.3 : 100,
            discountPrice: item.price || 70,
            soldPercent: item.quantity ? Math.min(item.quantity * 10, 100) : 75
          }));
        }
        this.isLoading = false;
        this.cdr.detectChanges(); // បង្ខំឱ្យ UI ធ្វើបច្ចុប្បន្នភាពទិន្នន័យភ្លាមៗ
      },
      error: (err) => {
        console.error('Error loading deals:', err);
        this.errorMessage = 'Failed to load deals data.';
        this.isLoading = false;
        this.cdr.detectChanges();
      }
    });
  }
}