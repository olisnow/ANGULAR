import {Component, ContentChild, Input, OnInit, Optional} from '@angular/core';
import {FormGroupDirective, NgControl, NgForm, NgModel} from '@angular/forms';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {

  @Input() label: string;

  @ContentChild(NgModel) ngModel: NgModel;
  @ContentChild(NgControl) ngControl: NgControl;
  get control() {
    return this.ngModel || this.ngControl;
  }

  get form() {
    return this.ngForm || this.formGroupDir;
  }

  constructor(@Optional() public ngForm: NgForm,
              @Optional() public formGroupDir: FormGroupDirective) { }

  ngOnInit() {
  }
}
