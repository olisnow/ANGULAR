import {Component, Input, OnInit} from '@angular/core';
import {ActionService} from '../../services/action.service';
import {Book} from '../../model/book.model';

@Component({
  selector: 'app-buy-button',
  templateUrl: './buy-button.component.html',
  styleUrls: ['./buy-button.component.css']
})
export class BuyButtonComponent implements OnInit {

  @Input() book: Book;

  constructor(public action: ActionService) { }

  ngOnInit() {
  }

}
