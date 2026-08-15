import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrls: ['./about.css']
})
export class AboutComponent {
  storeInfo = {
    name: 'SOPHANNY Shop',
    description: 'We are your one-stop online destination for premium tech gadgets, fashion, and lifestyle products. Committed to bringing you top-tier quality and exceptional customer service.',
    location: 'Phnom Penh, Cambodia',
    email: 'contact@sophannyshop.com',
    phone: '+855 70980276 | 89818808'
  };

  // Stats Data
  stats = [
    { number: '10K+', label: 'Happy Customers', icon: 'bi-people' },
    { number: '500+', label: 'Products Available', icon: 'bi-box-seam' },
    { number: '99%', label: 'Positive Feedback', icon: 'bi-hand-thumbs-up' },
    { number: '24/7', label: 'Support Online', icon: 'bi-headset' }
  ];

  // Key Features
  features = [
    { title: '100% Quality Guarantee', desc: 'Authentic items sourced directly from trusted brands.', icon: 'bi-patch-check-fill' },
    { title: 'Fast Delivery', desc: 'Quick and safe shipment to your doorstep.', icon: 'bi-rocket-takeoff-fill' },
    { title: '24/7 Support', desc: 'Our team is always here to assist you anytime.', icon: 'bi-headset' },
    { title: 'Secure Payments', desc: '100% protected and encrypted checkout system.', icon: 'bi-shield-lock-fill' }
  ];
}