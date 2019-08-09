import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatinaProductListComponent } from './componentes/creatina-product-list/creatina-product-list.component';


const routes: Routes = [
  { path: '',
   component: CreatinaProductListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreatinaRoutingModule { }
