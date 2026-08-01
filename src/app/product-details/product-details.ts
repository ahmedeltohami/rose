import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../core/services/home-service';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css'
})
export class ProductDetails {

  private route = inject(ActivatedRoute);
  private productService = inject(HomeService);
product:any;

ngOnInit(){
const id = this.route.snapshot.paramMap.get('id');
if(id){

this.productService.getSingleProduct(id).subscribe({

next:(res:any)=>{

this.product = res.product;

console.log(this.product);

}

})

}
}
}
