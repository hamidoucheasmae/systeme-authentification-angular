import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent } from './home/home.component';
import {AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path :'',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path :'home',
    component:HomeComponent
  },
  {
    path :'admin',
    component:AdminDashboardComponent,
    canActivate :[AuthGuard]
  },
  {
    path :'login',
    component:LoginComponent
  },
  {
    path :'register',
    component:RegisterComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
