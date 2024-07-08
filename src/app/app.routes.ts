import { Routes } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { BodyComponent } from './body/body.component';

export const routes: Routes = [
  { path: 'home', component: BodyComponent },
  { path: 'shop', component: ShopComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
