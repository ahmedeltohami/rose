import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filters',
  imports: [FormsModule],
  templateUrl: './filters.html',
  styleUrl: './filters.css',
})
export class Filters {

categories = [
    'Home & Living',
    'Garment Care',
    'Jewelry & Accessories',
    'Occasion Gifts',
    'Office & Stationery',
    'Personalized Gifts',
    'Gifts Box',
    'Other'
  ];
  brands = [
  'Tovola',
  'Sunday',
  'Sasho Gifts',
  'Casterly',
  'Mainst Gifts'
];
minPrice = 0;

maxPrice = 360;
ratings = [5,4,3,2,1];
colors = [
  '#5965FF',
  '#55C567',
  '#41C8E6',
  '#FDBA12',
  '#FF5733'
];
sizes = [
  'Extra Small',
  'Small',
  'Medium',
  'Large',
  'Extra Large'
];
}
