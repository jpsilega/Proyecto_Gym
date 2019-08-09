import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header-component/header.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../../../app-routing.module';
import { FooterComponent } from './footer-component/footer.component';
import { HeaderNavbarComponent } from './components/header-navbar/header-navbar.component';
import { LogoGymComponent } from './components/logo-gym/logo-gym.component';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, HeaderNavbarComponent, LogoGymComponent],
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
