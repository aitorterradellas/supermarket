import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../entities/Product';
import { Router } from '@angular/router';
import { ConstantsService } from '../../services/constantsService/constants.service';
import { SessionService } from '../../services/sessionService/session.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {
  @Input()
  item: Product;

  constructor(private router: Router, private sessionService: SessionService) { }

  ngOnInit() {
  }

  goToDetail() {
    this.router.navigate([ConstantsService.PAGES.DETAIL + `/${this.item.id}`])
  }

  addToCart() {
    this.sessionService.addToCart(this.item);
  }

  removeFromCart() {
    this.sessionService.removeFromCart(this.item);
  }
}
