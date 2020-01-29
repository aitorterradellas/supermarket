import { Component, OnInit } from '@angular/core';
import { ConstantsService } from '../services/constantsService/constants.service';
import { SessionService } from '../services/sessionService/session.service';
import { Router } from '@angular/router';
import { CartItem } from '../entities/Cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart: CartItem[];

  constructor(private sessionService: SessionService, private router: Router) {
  }

  ngOnInit() {
    this.cart = this.sessionService.getCart();
  }

  goBack() {
    this.router.navigate([ConstantsService.PAGES.HOME]);
  }

  isEmpty(): boolean {
    return this.cart.length === 0;
  }
}
