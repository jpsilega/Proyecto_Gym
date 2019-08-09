import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutPricingPlansComponent } from './checkout-pricing-plans.component';

describe('CheckoutPricingPlansComponent', () => {
  let component: CheckoutPricingPlansComponent;
  let fixture: ComponentFixture<CheckoutPricingPlansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutPricingPlansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutPricingPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
