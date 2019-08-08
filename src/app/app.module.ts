import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { NavbarModule } from './modules/FeatureModules/navbar-module/navbar.module';
import { HomeModule } from './modules/FeatureModules/home-module/home.module';
import { AuthenticationModule } from './modules/FeatureModules/authentication-module/authentication.module';
import { BoostrapModule } from './modules/StyleModules/boostrap-module/boostrap.module';
import { MaterialModule } from './modules/StyleModules/material-module/material.module';


import { AppComponent } from './app.component';





@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,       
    ReactiveFormsModule,
    NavbarModule,
    HomeModule,
    AuthenticationModule,        
    BrowserAnimationsModule,
    BoostrapModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
