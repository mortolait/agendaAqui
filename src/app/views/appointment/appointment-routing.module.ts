import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppointmentComponent } from './appointment.component'
import { ListAppointmentComponent } from './list-appointment/list-appointment.component';
import { NewAppointmentComponent } from './new-appointment/new-appointment.component';
import { PerfilAppointmentComponent } from './perfil-appointment/perfil-appointment.component';
import { CalendarComponent } from './calendar/calendar.component';

const routes: Routes = [
  {
    path: '',
    component: AppointmentComponent,
    children: [
      {
        path:'',
        component: ListAppointmentComponent,
        data: {
          title: $localize`Apontamentos`,
        },
      },
      {
        path: 'list',
        component: ListAppointmentComponent,
        data: {
          title: $localize`Lista de apontamentos`,
        },
      },
      {
        path: 'new-appointment',
        component: NewAppointmentComponent,
        data: {
          title: $localize`Novo apontamento`,
        },
      },
      {
        path: 'calendar',
        component: CalendarComponent,
        data: {
          title: $localize`Calendario`,
        },
      },
      {
        path: ':id',
        component: PerfilAppointmentComponent,
        data: {
          title: $localize`Perfil apontamento`,
        },
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppointmentRoutingModule { }
