import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/FeatureModules/home-module/home-component/home.component';
import { LoginComponent } from './modules/FeatureModules/authentication-module/login/login.component';
import { RegisterComponent } from './modules/FeatureModules/authentication-module/register/register.component';

const routes: Routes = [    
    { path: '', component: HomeComponent },          
    { path: 'login', component: LoginComponent },   
    { path: 'register', component: RegisterComponent },   
    { path: '**', redirectTo: '' }
];


@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule {}
