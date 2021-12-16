import {Book} from './book.model';

export class CartRow {

  deleted = false;

  constructor(public book: Book,
              public quantity: number = 1) {
  }

}
