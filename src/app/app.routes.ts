import { Routes } from '@angular/router';
import { HomePage } from './home/home-page/home-page';
import { Allcategory } from './category/allcategory/allcategory';
import { Login } from './auth/login/login';


export const routes: Routes = [
  {path:'',redirectTo :'home',pathMatch:'full'},
  {path:'home', component: HomePage ,title: "Home page"},
  {path:'category', component: Allcategory ,title: "All Category"},
  {
  path: 'product/:id',
  loadComponent: () =>
    import('./product-details/product-details')
      .then(c => c.ProductDetails)
},

  {
path:'login',
component:Login
},



];
