import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuplementosModuleRoutingModule } from './suplementos-module-routing.module';
import { SuplmentosParentListComponent } from './components/suplmentos-parent-list/suplmentos-parent-list.component';
import { SuplementosComponent } from './components/suplementos/suplementos.component';
import { ProteinModuleModule } from '../protein-module/protein-module.module';
import { BcaaInstantaneoModule } from '../bcaa-instantaneo-module/bcaa-instantaneo.module';
import { CreatinaModule } from '../creatina-module/creatina.module';
import { HmbSuplementoModule } from '../hmb-suplemento-module/hmb-suplemento.module';
import { ZmaSuplementoModule } from '../zma-suplemento-module/zma-suplemento.module';


@NgModule({
  declarations: [SuplmentosParentListComponent, SuplementosComponent],
  imports: [
    CommonModule,
    ProteinModuleModule,
    BcaaInstantaneoModule,
    CreatinaModule,
    HmbSuplementoModule,
    ZmaSuplementoModule,
    SuplementosModuleRoutingModule
  ]
})
export class SuplementosModuleModule { }
