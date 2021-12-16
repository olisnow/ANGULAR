import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartReactiveComponent } from './cart-reactive.component';

describe('CartReactiveComponent', () => {
  let component: CartReactiveComponent;
  let fixture: ComponentFixture<CartReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
