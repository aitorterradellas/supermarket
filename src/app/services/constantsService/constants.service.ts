import { Injectable } from '@angular/core';

export enum PAGES {
  HOME = 'home',
  DETAIL = 'product',
  CART = 'cart'
}

@Injectable()
export class ConstantsService {

  constructor() { }
  static URL = 'https://raw.githubusercontent.com/wedeploy-examples/supermarket-web-example/master/products.json';
  static PAGES = PAGES;
}
