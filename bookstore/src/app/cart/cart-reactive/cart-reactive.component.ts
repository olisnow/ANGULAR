import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AppValidators} from '../../core/app-validators';

@Component({
  selector: 'app-cart-reactive',
  templateUrl: './cart-reactive.component.html',
  styleUrls: ['./cart-reactive.component.css']
})
export class CartReactiveComponent implements OnInit {

  submitted = false;

  form: FormGroup;
  identity: FormGroup;
  shipping: FormGroup;
  billing: FormGroup;
  sameAddress: FormControl;

  constructor(private fb: FormBuilder) { }
  ngOnInit() {
    // this.identity = new FormGroup({
    //   firstname: new FormControl(),
    //   lastname: new FormControl('', [
    //     Validators.required,
    //     Validators.minLength(2)
    //   ]),
    //   email: new FormControl(),
    // });
    // this.shipping = new FormGroup({
    //   street: new FormControl(),
    //   zipcode: new FormControl('', [
    //     Validators.required,
    //     Validators.pattern(/^[0-9]{5}$/)
    //   ]),
    //   city: new FormControl('',
    //     Validators.required),
    //   country: new FormControl(),
    // });
    // this.form = new FormGroup({
    //   identity: this.identity,
    //   shipping: this.shipping,
    // });

    this.identity = this.fb.group({
      firstname: '',
      lastname: ['', [
        Validators.required,
        Validators.minLength(2)
      ]],
      email: ['',
        AppValidators.email('gmail.com')
      ],
    });
    this.shipping = this.fb.group({
      street: '',
      zipcode: ['', [
        Validators.required,
        AppValidators.zipcode
      ]],
      city: ['',
        Validators.required
      ],
      country: '',
    });
    this.billing = this.fb.group({
      street: '',
      zipcode: ['', [
        Validators.required,
        AppValidators.zipcode
      ]],
      city: ['',
        Validators.required
      ],
      country: '',
    });
    this.sameAddress = this.fb.control(true);
    this.form = this.fb.group({
      identity: this.identity,
      shipping: this.shipping,
      // billing: this.billing,
      sameAddress: this.sameAddress,
    });

    const initial = {
      identity: {
        firstname: 'Thierry',
        lastname: 'Chatel'
      },
      shipping: {
        city: 'Lunel'
      }
    };
    this.form.patchValue(initial);
  }
  updateBilling() {
    if (this.hasBillingAddress()) {
      this.form.addControl('billing', this.billing);
    } else {
      this.form.removeControl('billing');
    }
  }
  hasBillingAddress() {
    return !this.sameAddress.value;
  }

  save() {
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }

  isSubmitDisabled() {
    return this.submitted
      && this.form.invalid;
  }
  hadClassSubmitted() {
    return this.submitted;
  }
  onSubmit() {
    this.submitted = true;
    if (this.form.valid) {
      this.save();
    }
  }
}
