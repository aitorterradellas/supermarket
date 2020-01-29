import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DataService } from '../services/dataService/data.service';
import { ListProductComponent } from '../components/list-product/list-product.component';
import { DetailProductComponent } from '../components/detail-product/detail-product.component';
import { SessionService } from '../services/sessionService/session.service';
import { CartComponent } from '../cart/cart.component';


@NgModule({
  declarations: [HomeComponent, ListProductComponent, DetailProductComponent, CartComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    ListProductComponent,
    DetailProductComponent,
    CartComponent
  ],
  providers: [
    DataService,
    SessionService
  ]
})
export class HomeModule { }
