import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../entities/Product';
import { SessionService } from '../../services/sessionService/session.service';
import { ConstantsService } from '../../services/constantsService/constants.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.scss']
})
export class DetailProductComponent implements OnInit {
  id: number;
  item: Product;

  constructor(private sessionService: SessionService, private router: Router, private route: ActivatedRoute) {
    this.item = new Product();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.item = this.sessionService.getProduct(this.id);
      console.log(this.item);
    });
  }

  goBack() {
    this.router.navigate([ConstantsService.PAGES.HOME]);
  }
}
