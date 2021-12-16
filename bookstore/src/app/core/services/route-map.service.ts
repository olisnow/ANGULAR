import { Injectable } from '@angular/core';
import {Book} from '../model/book.model';

@Injectable()
export class RouteMapService {

  constructor() { }

  getCatalogLink(): string[] {
    return ['/catalog/list'];
  }

  getBookLink(book: Book): string[] {
    return ['/catalog/book', book._id.$oid];
  }

  getCartLink(): string[] {
    return ['/cart/content'];
  }

  getOrderLink(): string[] {
    return ['/cart/order'];
  }

  getReactiveLink(): string[] {
    return ['/cart/reactive'];
  }

}
