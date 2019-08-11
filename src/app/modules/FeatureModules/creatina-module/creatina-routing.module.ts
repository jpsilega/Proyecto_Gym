import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatinaProductListComponent } from './componentes/creatina-product-list/creatina-product-list.component';
import { CreatinaProductDetailComponent } from './componentes/creatina-product-detail/creatina-product-detail.component';


const routes: Routes = [
  { path: '',
   component: CreatinaProductListComponent
  },
  { path: 'details/:id',
   component: CreatinaProductDetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreatinaRoutingModule { }
