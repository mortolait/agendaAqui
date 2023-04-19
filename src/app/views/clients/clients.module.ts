import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  GridModule,
  ButtonModule,
  SmartTableModule,
  NavModule,
  TabsModule,
  CollapseModule,
  TableModule,
  UtilitiesModule,
  BadgeModule,
  AlertModule,
  CardModule,
  SharedModule,
  ButtonGroupModule,
  DropdownModule,
  FormModule,
  ListGroupModule,
  MultiSelectModule,
  DatePickerModule,
  DateRangePickerModule,
  TimePickerModule,
  ModalModule,
  BreadcrumbModule
} from '@coreui/angular-pro';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsComponent } from './clients.component';
import { ListClientsComponent } from './list-clients/list-clients.component';
import { PerfilClientsComponent } from './perfil-clients/perfil-clients.component';
import { NewClientComponent } from './new-client/new-client.component';
import { NgxMaskModule } from 'ngx-mask';
import { DocsComponentsModule } from '@docs-components/docs-components.module';
import { SmartTablesRoutingModule } from '../smart-tables/smart-tables-routing.module';
import { ModalConfirmComponent } from './modal-confirm/modal-confirm.component';
import { ListAppointmentComponent } from '../appointment/list-appointment/list-appointment.component';
@NgModule({
  declarations: [
    ClientsComponent,
    ListClientsComponent,
    PerfilClientsComponent,
    NewClientComponent,
    ModalConfirmComponent,

    ListAppointmentComponent
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    SmartTableModule,
    BreadcrumbModule,
    GridModule,
    ButtonModule,
    NavModule,
    TabsModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonGroupModule,
    CardModule,
    DropdownModule,
    FormModule,
    ListGroupModule,
    ReactiveFormsModule,
    NgxMaskModule,
    CommonModule,
    DocsComponentsModule,
    SmartTablesRoutingModule,
    GridModule,
    CardModule,
    SmartTableModule,
    CollapseModule,
    TableModule,
    UtilitiesModule,
    BadgeModule,
    SharedModule,
    ButtonModule,
    AlertModule,
    MultiSelectModule,
    DatePickerModule,
    DateRangePickerModule,
    TimePickerModule,
    ModalModule
  ],
})
export class ClientsModule {}
