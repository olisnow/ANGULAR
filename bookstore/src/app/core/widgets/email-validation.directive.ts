import {Directive, forwardRef, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';
import {AppValidators} from '../app-validators';

@Directive({
  selector: 'input[type=email]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => EmailValidationDirective),
    multi: true,
  }]
})
export class EmailValidationDirective implements Validator {

  @Input() domain: string;

  validate(control: AbstractControl): ValidationErrors | null {
    return AppValidators.email(this.domain)(control);
  }

  constructor() { }
}
