import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private http = inject(HttpClient);

  getHomeData() {
    return this.http.get('https://flower.elevateegy.com/api/v1/home');
  }
  getPopularitems(){
        return this.http.get('https://flower.elevateegy.com/api/v1/home');

  }
  getProducts(page:number=1){

    return this.http.get(
      `${environment.apiUrl}/products?page=${page}&limit=12`
    );

  }

  getSingleProduct(id:string){

return this.http.get(

`${environment.apiUrl}/products/${id}`

);

}

}
