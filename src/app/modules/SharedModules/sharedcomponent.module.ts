import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanPreciosComponent } from './plan-precios/plan-precios.component';
import { NumbersNumbersComponent } from '../SharedModules/numbers-numbers/numbers-numbers.component';
import { CheckoutPricingPlansComponent } from './checkout-pricing-plans/checkout-pricing-plans.component';
import { GymNumberDashboardComponent } from './gym-number-dashboard/gym-number-dashboard.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PlanPreciosComponent, NumbersNumbersComponent, CheckoutPricingPlansComponent, GymNumberDashboardComponent],
  exports: [
    PlanPreciosComponent, NumbersNumbersComponent,CheckoutPricingPlansComponent,GymNumberDashboardComponent
  ]
})
export class SharedcomponentModule { }
