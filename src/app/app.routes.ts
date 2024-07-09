import { Routes } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { BodyComponent } from './body/body.component';
import { InquiriesComponent } from './inquiries/inquiries.component';
import { AboutComponent } from './about/about.component';
import { FindUsComponent } from './find-us/find-us.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { find } from 'rxjs';

export const routes: Routes = [
  { path: 'home', component: BodyComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'inquiries', component: InquiriesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'find-us', component: FindUsComponent },
  { path: 'create-account', component: CreateAccountComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
