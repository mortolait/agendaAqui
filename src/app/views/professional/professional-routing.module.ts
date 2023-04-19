import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProfessionalComponent } from './list-professional/list-professional.component';
import { NewProfessionalComponent } from './new-professional/new-professional.component';
import { PerfilProfessionalComponent } from './perfil-professional/perfil-professional.component';
import { ProfessionalComponent } from './professional.component';

const routes: Routes = [
  {
    path: '',
    component: ProfessionalComponent,
    children: [
      {
        path: '',
        component: ListProfessionalComponent,
        data: {
          title: $localize`Profissionais`,
        },
      },
      {
        path: 'new-professional',
        component: NewProfessionalComponent,
        data: {
          title: $localize`Novo profissional`,
        },
      },
      {
        path: ':id',
        component: PerfilProfessionalComponent,
        data: {
          title: $localize`Perfil profissional`,
        },
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfessionalRoutingModule {}
