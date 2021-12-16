import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import {CatalogModule} from './catalog/catalog.module';
import {ServicesModule} from './core/services/services.module';
import {HttpModule} from '@angular/http';
import {AppRoutingModule} from './app-routing.module';
import {WidgetsModule} from './core/widgets/widgets.module';
import {CartModule} from './cart/cart.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // Routing module :
    AppRoutingModule,
    // Features modules :
    CatalogModule,
    // Services modules :
    ServicesModule,
    HttpModule,
    // Components, directives, pipes
    BrowserModule,
    BrowserAnimationsModule,
    WidgetsModule,
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'fr-FR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
