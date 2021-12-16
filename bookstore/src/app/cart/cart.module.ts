import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CartRoutingModule} from './cart-routing.module';
import {CartRootComponent} from './cart-root/cart-root.component';
import {CartContentComponent} from './cart-content/cart-content.component';
import {CartOrderComponent} from './cart-order/cart-order.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {WidgetsModule} from '../core/widgets/widgets.module';
import {CartReactiveComponent} from './cart-reactive/cart-reactive.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CartRoutingModule,
    WidgetsModule,
  ],
  declarations: [CartRootComponent, CartContentComponent, CartOrderComponent, CartReactiveComponent]
})
export class CartModule { }
