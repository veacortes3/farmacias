import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../auth/pages/home/home.component';
import { DashboardComponent } from '../auth/pages/dashboard/dashboard.component';
import { EditarComponent } from '../auth/pages/editar/editar.component';
import { PasswordComponent } from '../auth/pages/password/password.component';

const routes: Routes = [
  {

    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent

      },
      {
        path: 'editar',
        component: EditarComponent

      },
      {
        path: 'newpassword',
        component: PasswordComponent

      },
      {
        path: '**',
        redirectTo: 'dashboard'

      },
    ]
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
