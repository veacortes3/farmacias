import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import{ReactiveFormsModule }from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { PasswordComponent } from './pages/password/password.component';
import { MainComponent } from './pages/main/main.component';
import { ErrorComponent } from '../error/error/error.component';
import { HomeComponent } from './pages/home/home.component';
import { EditarComponent } from './pages/editar/editar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    PasswordComponent,
    MainComponent,
    ErrorComponent,
    HomeComponent,
    EditarComponent,
    DashboardComponent
  ],
  imports: [

    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
