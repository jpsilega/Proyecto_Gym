import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home-component/home.component';
import { AppRoutingModule } from '../../../app-routing.module';
import { SharedcomponentModule } from '../../SharedModules/sharedcomponent.module';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [HomeComponent],
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
