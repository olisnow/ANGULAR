import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CatalogRootComponent} from './catalog-root/catalog-root.component';
import {CatalogListComponent} from './catalog-list/catalog-list.component';
import {CatalogBookComponent} from './catalog-book/catalog-book.component';
import {CatalogRoutingModule} from './catalog-routing.module';
import {WidgetsModule} from '../core/widgets/widgets.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    CatalogRoutingModule,
    WidgetsModule,
    FormsModule,
  ],
  declarations: [
    CatalogRootComponent,
    CatalogListComponent,
    CatalogBookComponent
  ],
})
export class CatalogModule {
}
