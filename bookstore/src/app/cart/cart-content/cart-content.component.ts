import { Component, OnInit } from '@angular/core';
import {CartService} from '../../core/services/cart.service';
import {Title} from '@angular/platform-browser';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {CartRow} from '../../core/model/cart-row.model';

@Component({
  selector: 'app-cart-content',
  templateUrl: './cart-content.component.html',
  styleUrls: ['./cart-content.component.css'],
  animations: [
    trigger('cartRows', [
      state('del', style({
        transform: 'scale(0)'
      })),
      transition('in => del',
        animate(400,
          style({
            transform: 'scale(0)'
          })
        )
      )
    ]),
  ]
})
export class CartContentComponent implements OnInit {

  getCartRowState(row: CartRow) {
    return row.deleted ? 'del' : 'in';
  }

  constructor(public cart: CartService,
              private title: Title) { }

  ngOnInit() {
    this.title.setTitle('Panier');
  }

}
