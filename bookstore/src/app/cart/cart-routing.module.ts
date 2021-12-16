import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CartRootComponent} from './cart-root/cart-root.component';
import {CartContentComponent} from './cart-content/cart-content.component';
import {CartOrderComponent} from './cart-order/cart-order.component';
import {CartReactiveComponent} from './cart-reactive/cart-reactive.component';
import {NonEmptyCartGuard} from '../core/services/non-empty-cart.guard';

const routes: Routes = [
  {
    path: '',
    component: CartRootComponent,

    children: [
      {path: 'content', component: CartContentComponent, data: {module: 'cart'}},
      {path: 'order', component: CartOrderComponent,
       canActivate: [NonEmptyCartGuard]},
      {path: 'reactive', component: CartReactiveComponent},
      {path: '', redirectTo: 'content', pathMatch: 'full'},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
