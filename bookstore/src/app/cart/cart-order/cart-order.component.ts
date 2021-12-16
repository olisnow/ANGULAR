import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {NgForm, NgModel} from '@angular/forms';
import {CountryService} from '../../core/services/country.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-cart-order',
  templateUrl: './cart-order.component.html',
  styleUrls: ['./cart-order.component.css']
})
export class CartOrderComponent implements OnInit, AfterViewInit {

  @ViewChild('formInfo') formInfo: NgForm;
  @ViewChild('countryModel') countryModel: NgModel;
  countryResult$: Observable<string[]>;

  data = {
    identity: {
      firstname: 'Thierry',
      lastname: 'Chatel',
      email: '',
    },
    shipping: {
      street: '',
      zipcode: '',
      city: 'Lunel',
      country: '',
    },
    billing: {
      street: '',
      zipcode: '',
      city: '',
      country: '',
    },
    sameAddress: true
  };

  constructor(private country: CountryService) { }
  ngOnInit() { }
  ngAfterViewInit() {
    this.countryResult$ = this.countryModel.valueChanges
      .debounceTime(500)
      .distinctUntilChanged()
      .filter(name => name.trim().length >= 2)
      .switchMap(name => this.country.search(name));
  }

  save() {
    if (this.formInfo.valid) {
      console.log(this.data);
    }
  }
  log() {
    console.log(this.formInfo);
  }


}
