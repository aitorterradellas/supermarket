import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/dataService/data.service';
import { Product } from '../entities/Product';
import { SessionService } from '../services/sessionService/session.service';
import { Router } from '@angular/router';
import { ConstantsService } from '../services/constantsService/constants.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  list: Product[] = [];
  constructor(private dataService: DataService,
    private sessionService: SessionService,
    private router: Router) {
  }

  ngOnInit() {
    this.dataService.getProducts().subscribe(
      (data) => {
        let i = 0;
        for (let item of data as Product[]) {
          let product = new Product();
          product.map(item, i);
          this.list.push(product);
          ++i;
        }

        this.sessionService.setList(this.list);
      },
      (err) => { })
  }

  goToCart() {
    this.router.navigate([ConstantsService.PAGES.CART]);
  }

  getItemsInCart(): number {
    return this.sessionService.getCartList();
  }

}
