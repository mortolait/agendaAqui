import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultLayoutComponent } from './containers';
import { RegisterComponent } from './views/pages/register/register.component';

import { AuthGuard } from './core/auth.guard'
import { LoginGuard } from './core/login.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () => import('./views/home/home.module').then((m) => m.HomeModule),
    canLoad: [LoginGuard]
  },

  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home',
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./views/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
          canLoad: [AuthGuard]
      },
      {
        path: 'clients',
        loadChildren: () =>
          import('./views/clients/clients.module').then((m) => m.ClientsModule),
          canLoad: [AuthGuard]
      },
      {
        path: 'professional',
        loadChildren: () =>
          import('./views/professional/professional.module').then((m) => m.ProfessionalModule),
          canLoad: [AuthGuard]
      },
      {
        path: 'appointment',
        loadChildren: () =>
          import('./views/appointment/appointment.module').then((m) => m.AppointmentModule),
          canLoad: [AuthGuard]
      },

    ],
  },

  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page',
    },
  },
  { path: '**', redirectTo: 'dashboard' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
