import {Component, OnInit} from '@angular/core';
import {CatalogService} from '../../core/services/catalog.service';
import {ActivatedRoute} from '@angular/router';
import {Book} from '../../core/model/book.model';
import {Observable} from 'rxjs/Observable';
import {Title} from '@angular/platform-browser';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';

@Component({
  selector: 'app-catalog-book',
  templateUrl: './catalog-book.component.html',
  styleUrls: ['./catalog-book.component.css']
})
export class CatalogBookComponent implements OnInit {
  book$: Observable<Book>;

  constructor(private catalog: CatalogService,
              private route: ActivatedRoute,
              private title: Title) { }
  ngOnInit() {
    this.book$ = this.route.params
      .switchMap(params => this.catalog.getBook(params['id']))
      .do(book => this.title.setTitle('Livre: ' + book.title));
  }

}
