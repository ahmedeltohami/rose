import { Component, inject } from '@angular/core';
import { HomeService } from '../../core/services/home-service';
import { Product } from '../../core/interfaces/product';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-premium-gifts',
  imports: [RouterLink],
  templateUrl: './premium-gifts.html',
  styleUrl: './premium-gifts.css',
})
export class PremiumGifts {
private homeService = inject(HomeService);

  products: Product[] = [];

  ngOnInit() {

    this.homeService.getHomeData().subscribe({

      next: (res: any) => {

        this.products = res.products;

      }

    });

  }
  startIndex = 0;

get visibleProducts() {

  const isMobile = window.innerWidth < 768;

  return this.products.slice(
    this.startIndex,
    this.startIndex + (isMobile ? 1 : 3)
  );

}

next() {

  const step = window.innerWidth < 768 ? 1 : 3;

  if (this.startIndex < this.products.length - step) {
    this.startIndex += step;
  }

}

prev() {

  const step = window.innerWidth < 768 ? 1 : 3;

  if (this.startIndex >= step) {
    this.startIndex -= step;
  }

}
}
