import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfessionalRoutingModule } from './professional-routing.module';
import { ProfessionalComponent } from './professional.component';
import { ListProfessionalComponent } from './list-professional/list-professional.component';
import { NewProfessionalComponent } from './new-professional/new-professional.component';
import { PerfilProfessionalComponent } from './perfil-professional/perfil-professional.component';
import { AlertModule, BadgeModule, BreadcrumbModule, ButtonGroupModule, ButtonModule, CardModule, CollapseModule, DatePickerModule, DateRangePickerModule, DropdownModule, FormModule, GridModule, ListGroupModule, ModalModule, MultiSelectModule, NavModule, SharedModule, SmartTableModule, TableModule, TabsModule, TimePickerModule, UtilitiesModule } from '@coreui/angular-pro';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { DocsComponentsModule } from '@docs-components/docs-components.module';
import { SmartTablesRoutingModule } from '../smart-tables/smart-tables-routing.module';


@NgModule({
  declarations: [
    ProfessionalComponent,
    ListProfessionalComponent,
    NewProfessionalComponent,
    PerfilProfessionalComponent
  ],
  imports: [
    CommonModule,
    ProfessionalRoutingModule,
    CommonModule,
    SmartTableModule,
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
    ModalModule,
    BreadcrumbModule
  ]
})
export class ProfessionalModule { }
