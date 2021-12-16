import {NgModule} from '@angular/core';
import {CatalogService} from './catalog.service';
import {CartService} from './cart.service';
import {ActionService} from './action.service';
import {RouteMapService} from './route-map.service';
import {CountryService} from './country.service';
import {NonEmptyCartGuard} from './non-empty-cart.guard';

@NgModule({
  providers: [
    CatalogService,
    CartService,
    ActionService,
    RouteMapService,
    CountryService,
    NonEmptyCartGuard,
  ]
})
export class ServicesModule { }
