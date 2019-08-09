import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home-component/home.component';
import { SharedcomponentModule } from '../../SharedModules/sharedcomponent.module';
import { HomeRoutingModule } from './home-routing.module';
import { KeepYourBodyComponent } from './components/keep-your-body/keep-your-body.component';

@NgModule({
  declarations: [HomeComponent, KeepYourBodyComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedcomponentModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
