import { Component, inject } from '@angular/core';
import { Product } from '../../core/interfaces/product';
import { HomeService } from '../../core/services/home-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-popular-items',
  imports: [RouterLink],
  templateUrl: './popular-items.html',
  styleUrl: './popular-items.css',
})
export class PopularItems {
private homeService = inject(HomeService);

  products: Product [] = [];

  ngOnInit() {

    this.homeService.getPopularitems().subscribe({

      next: (res: any) => {

        this.products = res.products;

      }

    });

  }
  startIndex = 0;

get visibleProducts() {
    return this.products.slice(this.startIndex, this.startIndex + 1);


  const isMobile = window.innerWidth < 768;

  return this.products.slice(
    this.startIndex,
    this.startIndex + (isMobile ? 1 : 3)
  );

}

next() {

  if(this.startIndex < this.products.length - 1){

      this.startIndex++;

  }

}
prev() {

  if(this.startIndex > 0){

      this.startIndex--;

  }

}
}

