import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanPreciosComponent } from './plan-precios/plan-precios.component';
import { NumbersNumbersComponent } from '../SharedModules/numbers-numbers/numbers-numbers.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PlanPreciosComponent, NumbersNumbersComponent], 
  exports: [
    PlanPreciosComponent, NumbersNumbersComponent
  ]
})
export class SharedcomponentModule { }
