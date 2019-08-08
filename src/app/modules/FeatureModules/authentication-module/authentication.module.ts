import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MaterialModule } from '../../StyleModules/material-module/material.module';



@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule, MaterialModule
  ],
  exports: [
    LoginComponent, RegisterComponent
  ]
})
export class AuthenticationModule { }
