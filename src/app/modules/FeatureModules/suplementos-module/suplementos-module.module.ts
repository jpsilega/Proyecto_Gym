import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuplementosModuleRoutingModule } from './suplementos-module-routing.module';
import { SuplmentosParentListComponent } from './components/suplmentos-parent-list/suplmentos-parent-list.component';
import { SuplementosComponent } from './components/suplementos/suplementos.component';


@NgModule({
  declarations: [SuplmentosParentListComponent, SuplementosComponent],
  imports: [
    CommonModule,
    SuplementosModuleRoutingModule
  ]
})
export class SuplementosModuleModule { }
