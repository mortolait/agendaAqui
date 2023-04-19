import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './clients.component';
import { ListClientsComponent } from './list-clients/list-clients.component';
import { NewClientComponent } from './new-client/new-client.component';
import { PerfilClientsComponent } from './perfil-clients/perfil-clients.component';
const routes: Routes = [
  {
    path: '',
    component: ClientsComponent,
    children: [
      {
        path: '',
        component: ListClientsComponent,
        data: {
          title: $localize`Clientes`,
        },
      },
      {
        path: 'new-client',
        component: NewClientComponent,
        data: {
          title: $localize`Novo Cliente`,
        }
      },
      {
        path: ':id',
        component: PerfilClientsComponent,
        data: {
          title: $localize`Perfil Cliente`,
        }
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientsRoutingModule {}
