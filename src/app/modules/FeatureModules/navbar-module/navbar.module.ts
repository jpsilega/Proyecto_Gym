import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header-component/header.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../../../app-routing.module';
import { FooterComponent } from './footer-component/footer.component';



@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule 
  ], 
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class NavbarModule { }
