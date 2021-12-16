import { Injectable } from '@angular/core';
import {Book} from '../model/book.model';
import {CartService} from './cart.service';
import {Router} from '@angular/router';
import {RouteMapService} from './route-map.service';

@Injectable()
export class ActionService {

  constructor(private cart: CartService,
              private router: Router,
              private routeMap: RouteMapService) { }

  buy(book: Book) {
    this.cart.addRow(book);
    this.router.navigate(this.routeMap.getCartLink());
  }

  order() {
    this.router.navigate(this.routeMap.getOrderLink());
  }

}


