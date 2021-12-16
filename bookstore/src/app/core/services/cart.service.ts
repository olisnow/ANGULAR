import { Injectable } from '@angular/core';
import {CartRow} from '../model/cart-row.model';
import {Book} from '../model/book.model';

@Injectable()
export class CartService {

  rows: CartRow[] = [];

  constructor() { }

  addRow(book: Book, quantity: number = 1) {
    this.rows.push(new CartRow(book, quantity));
  }

  removeRow(row: CartRow) {
    row.deleted = true;
    setTimeout(() => {
      this.rows = this.rows.filter(r => r !== row);
    }, 500);
  }

  amount(row: CartRow) {
    return row.quantity * row.book.price;
  }
  total() {
    return this.rows
      .map(row => this.amount(row))
      .reduce((total, value) => total + value, 0);
  }
  count() {
    return this.rows
      .map(row => row.quantity)
      .reduce((total, value) => total + value, 0);
  }
  isEmpty() {
    return this.rows.length === 0;
  }

}
