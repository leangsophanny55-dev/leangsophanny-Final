import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories.html',
  styleUrls: ['./categories.css']
})
export class CategoriesComponent {
  // បញ្ជីប្រភេទទំនិញគំរូជាមួយ Bootstrap Icons
  categories = [
    { id: 1, name: 'Electronics', count: '120 Products', icon: 'bi-laptop', description: 'Phones, Laptops, Accessories' },
    { id: 2, name: 'Fashion & Clothing', count: '350 Products', icon: 'bi-bag-heart', description: 'Men, Women, Kids' },
    { id: 3, name: 'Beauty & Care', count: '85 Products', icon: 'bi-flower1', description: 'Skincare, Makeup, Perfume' },
    { id: 4, name: 'Home & Kitchen', count: '210 Products', icon: 'bi-house-door', description: 'Furniture, Decor, Appliances' },
    { id: 5, name: 'Sports & Fitness', count: '95 Products', icon: 'bi-dribbble', description: 'Gym Equipment, Sportswear' },
    { id: 6, name: 'Books & Stationeries', count: '150 Products', icon: 'bi-journal-bookmark', description: 'Novels, School Supplies' }
  ];
}