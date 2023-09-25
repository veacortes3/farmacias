import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error/error.component';

const routes: Routes = [
 {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)

  }, 
  
  
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)

  }, 

  {
    path: '404',
    component: ErrorComponent

  },

  {
    path: '**',
      redirectTo: 'auth'
  
    },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
