import { Component } from '@angular/core';
import { Filters } from '../allcategory/filters/filters';
import { ProductsGrid } from "./products-grid/products-grid";
import { Footer } from "../../home/footer/footer";

@Component({
  selector: 'app-allcategory',
  imports: [Filters, ProductsGrid],
  templateUrl: './allcategory.html',
  styleUrl: './allcategory.css',
})
export class Allcategory {
}
