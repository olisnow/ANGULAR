import {Component, OnInit} from '@angular/core';
import {CatalogService} from '../../core/services/catalog.service';
import {Observable} from 'rxjs/Observable';
import {Book} from '../../core/model/book.model';
import {Title} from '@angular/platform-browser';
import {RouteMapService} from '../../core/services/route-map.service';

@Component({
  selector: 'app-catalog-list',
  templateUrl: './catalog-list.component.html',
  styleUrls: ['./catalog-list.component.css']
})
export class CatalogListComponent implements OnInit {

  books$: Observable<Book[]>;

  constructor(private catalog: CatalogService,
              private title: Title,
              public routeMap: RouteMapService) { }

  ngOnInit() {
    this.books$ = this.catalog.getList();
    this.title.setTitle('Catalogue des livres');
  }

}
