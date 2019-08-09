import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuplmentosParentListComponent } from './components/suplmentos-parent-list/suplmentos-parent-list.component';


const routes: Routes = [
  { path: '', component: SuplmentosParentListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuplementosModuleRoutingModule { }
