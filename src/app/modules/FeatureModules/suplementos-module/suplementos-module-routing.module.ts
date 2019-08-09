import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuplmentosParentListComponent } from './components/suplmentos-parent-list/suplmentos-parent-list.component';


const routes: Routes = [
  { path: '',
   component: SuplmentosParentListComponent
  },
  { path: 'proteina',
    loadChildren: () => import(`../protein-module/protein-module.module` ).then(m => m.ProteinModuleModule)
  },
  { path: 'bcca-instant',
  loadChildren: () => import(`../bcaa-instantaneo-module/bcaa-instantaneo.module` ).then(m => m.BcaaInstantaneoModule)
  },
  { path: 'creatina',
  loadChildren: () => import(`../creatina-module/creatina.module` ).then(m => m.CreatinaModule)
  },
  { path: 'hmb-supply',
  loadChildren: () => import(`../hmb-suplemento-module/hmb-suplemento.module` ).then(m => m.HmbSuplementoModule)
  },
  { path: 'zma-supply',
  loadChildren: () => import(`../zma-suplemento-module/zma-suplemento.module` ).then(m => m.ZmaSuplementoModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuplementosModuleRoutingModule { }
