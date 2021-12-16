import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {CartService} from './cart.service';

@Injectable()
export class NonEmptyCartGuard implements CanActivate {
  constructor(private cart: CartService) {
  }

  canActivate(): boolean {
    return !this.cart.isEmpty();
  }
}
