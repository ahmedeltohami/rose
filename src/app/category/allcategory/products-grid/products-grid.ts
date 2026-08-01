import { HomeService } from './../../../core/services/home-service';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products-grid',
  imports: [RouterLink],
  templateUrl: './products-grid.html',
  styleUrl: './products-grid.css'
})
export class ProductsGrid {

  private productService = inject(HomeService);

  products:any[] = [];

  ngOnInit(){

    this.productService.getProducts().subscribe({

      next:(res:any)=>{

        this.products = res.products;

      }

    });

  }

}
