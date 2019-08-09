import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreatinaRoutingModule } from './creatina-routing.module';
import { CreatinaProductListComponent } from './componentes/creatina-product-list/creatina-product-list.component';
import { CreatinaProductComponent } from './componentes/creatina-product/creatina-product.component';


@NgModule({
  declarations: [CreatinaProductListComponent, CreatinaProductComponent],
  imports: [
    CommonModule,
    CreatinaRoutingModule
  ]
})
export class CreatinaModule { }
