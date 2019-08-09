import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: 'home', loadChildren: () => import(`./modules/FeatureModules/home-module/home.module` ).then(m => m.HomeModule) },
    { path: 'suplementos', loadChildren: () => import(`./modules/FeatureModules/suplementos-module/suplementos-module.module` ).then(m => m.SuplementosModuleModule) },
    /*{ path: 'register', component: RegisterComponent },
    */{ path: '', redirectTo:'/home', pathMatch:'full' },
    { path: '**', redirectTo:'/home', pathMatch:'full' },

];


@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule {}
