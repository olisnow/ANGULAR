import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export class AppValidators {

  static zipcode(control: AbstractControl): ValidationErrors | null {
    const pattern = /^[0-9]{5}$/;
    if (control.value && !pattern.test(control.value)) {
      return {
        zipcode: true
      };
    }
  }

  static email(requiredDomain?: string): ValidatorFn {
    const pattern = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/;
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.value) {
        if (!pattern.test(control.value)) {
          return {
            email: true
          };
        } else if (requiredDomain) {
          const [, actualDomain] = control.value.split('@');
          if (actualDomain !== requiredDomain) {
            return {
              domain: {actualDomain, requiredDomain}
            };
          }
        }
      }
      return null;
    };
  }

}
