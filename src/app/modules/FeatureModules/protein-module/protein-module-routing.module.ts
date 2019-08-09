import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProteinProductListComponent } from './componentes/protein-product-list/protein-product-list.component';


const routes: Routes = [
  { path: '',
   component: ProteinProductListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProteinModuleRoutingModule { }
