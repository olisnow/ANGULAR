import { Injectable } from '@angular/core';
import {Book} from '../model/book.model';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/publishLast';

@Injectable()
export class CatalogService {

  private readonly url = 'https://api.mongolab.com/api/1/databases/sfbooks/collections/sfbooks/';
  private readonly key = '?apiKey=d3qvB8ldYFW2KSynHRediqLuBLP8JA8i';

  books$: Observable<Book[]>;

  constructor(private http: Http) {
    this.books$ = this.http.get(this.url + this.key)
      .map(response => response.json())
      .publishLast()
      .refCount();
  }

  getList(): Observable<Book[]> {
    return this.books$;
  }

  getBook(id: string): Observable<Book> {
    // return this.http.get(this.url + id + this.key)
    //   .map(response => response.json());
    return this.getList()
      .map(books => books.filter(book => book._id.$oid === id)[0]);
  }
}
