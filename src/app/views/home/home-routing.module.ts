import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NewUserComponent } from './new-user/new-user.component';

import { LoginGuard } from '../../core/login.guard'
const routes: Routes = [
  {
    path:'',
    redirectTo:'login',
    pathMatch: 'full',
    
  },
  {
    path:'login',
    component: LoginComponent,
  },
  {
    path:'new-user',
    component: NewUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
