import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanPreciosComponent } from './plan-precios/plan-precios.component';
import { NumbersNumbersComponent } from '../SharedModules/numbers-numbers/numbers-numbers.component';
import { CheckoutPricingPlansComponent } from './checkout-pricing-plans/checkout-pricing-plans.component';
import { GymNumberDashboardComponent } from './gym-number-dashboard/gym-number-dashboard.component';
import { GymContactMessageDashboardComponent } from './gym-contact-message-dashboard/gym-contact-message-dashboard.component';
import { GymContactUsComponent } from './gym-contact-us/gym-contact-us.component';
import { GymOpenHourComponent } from './gym-open-hour/gym-open-hour.component';
import { IncreaseDecreaseQuantityComponent } from './increase-decrease-quantity/increase-decrease-quantity.component';
import { FormsModule } from '@angular/forms';
import { InstructionsProductComponent } from './instructions-product/instructions-product.component';
import { MaterialModule } from '../StyleModules/material-module/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  declarations: [PlanPreciosComponent, NumbersNumbersComponent, CheckoutPricingPlansComponent, GymNumberDashboardComponent, GymContactMessageDashboardComponent, GymContactUsComponent, GymOpenHourComponent, IncreaseDecreaseQuantityComponent, InstructionsProductComponent],
  exports: [
    PlanPreciosComponent, NumbersNumbersComponent,CheckoutPricingPlansComponent,GymNumberDashboardComponent,GymContactMessageDashboardComponent,IncreaseDecreaseQuantityComponent,InstructionsProductComponent
  ]
})
export class SharedcomponentModule { }
