import { Injectable } from '@angular/core';
import { Product } from '../../entities/Product';
import { CartItem } from '../../entities/Cart';

export class Session {
  list: Product[];
  cart: CartItem[];

  constructor() {}
}

@Injectable()
export class SessionService {
  constructor() { }

  newSession(): Session {
    let session = new Session();
    session.list = [];
    session.cart = [];
    return session;
  }

  getSession(): Session {
    const str = sessionStorage.getItem('Session');
    if (str) {
      return JSON.parse(str);
    }

    return null;
  }

  setSession(session: Session) {
    const obj = JSON.stringify(session);
    sessionStorage.setItem('Session', obj);
  }

  setList(list: Product[]) {
    let session = this.getSession();
    if (!session) {
      session = this.newSession();
    }

    session.list = list;
    this.setSession(session);
  }

  getList(): Product[] {
    const session = this.getSession();
    if (session) {
      return session.list;
    }

    return null;
  }

  getProduct(id: number): Product {
    const list = this.getList();
    if (list) {
      return list[id];
    }

    return null;
  }

  setCart(cart: CartItem[]) {
    let session = this.getSession();
    if (!session) {
      session = new Session();
    }

    session.cart = cart;
    this.setSession(session);
  }

  addToCart(product: Product) {
    let cart = this.getCart();
    if (cart) {
      let found = false;
      for (let item of cart) {
        if (item.product.id === product.id) {
          item.count++;
          found = true;
          break;
        }
      }

      if (!found) {
        cart.push(new CartItem(product, 1));
      }
    } else {
      cart = [];
      cart.push(new CartItem(product, 1));
    }

    this.setCart(cart);
  }

  removeFromCart(product: Product) {
    let cart = this.getCart();
    if (cart) {
      for (let item of cart) {
        if (item.product.id === product.id) {
          item.count--;
          if (item.count === 0) {
            cart.splice(cart.indexOf(item), 1);
          }
          break;
        }
      }
    }

    this.setCart(cart);
  }

  getCart(): CartItem[] {
    const session = this.getSession();
    if (session) {
      return session.cart;
    }

    return null;
  }

  getCartList(): number {
    const cart = this.getCart();
    if (cart) return cart.length;
    return 0;
  }
}
