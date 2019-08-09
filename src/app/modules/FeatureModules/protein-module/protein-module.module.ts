import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProteinModuleRoutingModule } from './protein-module-routing.module';
import { ProteinProductListComponent } from './componentes/protein-product-list/protein-product-list.component';


@NgModule({
  declarations: [ProteinProductListComponent],
  imports: [
    CommonModule,
    ProteinModuleRoutingModule
  ]
})
export class ProteinModuleModule { }
