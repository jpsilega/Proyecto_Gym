import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreatinaRoutingModule } from './creatina-routing.module';
import { CreatinaProductListComponent } from './componentes/creatina-product-list/creatina-product-list.component';
import { CreatinaProductComponent } from './componentes/creatina-product/creatina-product.component';
import { CreatinaProductDetailComponent } from './componentes/creatina-product-detail/creatina-product-detail.component';
import { SharedcomponentModule } from '../../SharedModules/sharedcomponent.module';


@NgModule({
  declarations: [CreatinaProductListComponent, CreatinaProductComponent, CreatinaProductDetailComponent],
  imports: [
    CommonModule,
    SharedcomponentModule,
    CreatinaRoutingModule
  ]
})
export class CreatinaModule { }
