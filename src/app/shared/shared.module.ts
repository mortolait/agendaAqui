import { GenericAlertComponent } from 'src/app/shared/alert/generic-alert/generic-alrt.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GridModule} from '@coreui/angular-pro';
import {ButtonModule} from '@coreui/angular-pro';
import {SmartTableModule} from '@coreui/angular-pro';
import {NavModule} from '@coreui/angular-pro';
import {TabsModule} from '@coreui/angular-pro';
import {CollapseModule} from '@coreui/angular-pro';
import {TableModule} from '@coreui/angular-pro';
import {UtilitiesModule} from '@coreui/angular-pro';
import {BadgeModule} from '@coreui/angular-pro';
import {AlertModule} from '@coreui/angular-pro';
import {CardModule} from '@coreui/angular-pro';
import {ButtonGroupModule} from '@coreui/angular-pro';
import {DropdownModule} from '@coreui/angular-pro';
import {FormModule} from '@coreui/angular-pro';
import {ListGroupModule} from '@coreui/angular-pro';
import {MultiSelectModule} from '@coreui/angular-pro';
import {DatePickerModule} from '@coreui/angular-pro';
import {DateRangePickerModule} from '@coreui/angular-pro';
import {TimePickerModule} from '@coreui/angular-pro';
import {ModalModule} from '@coreui/angular-pro';
import { ClientsRoutingModule } from '../views/clients/clients-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { DocsComponentsModule } from '@docs-components/docs-components.module';
import { SmartTablesRoutingModule } from '../views/smart-tables/smart-tables-routing.module';



@NgModule({
  declarations: [
    GenericAlertComponent
  ],
  imports: [
    CommonModule,
    AlertModule
  ],
  exports: [
    CommonModule,
    ClientsRoutingModule,
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
    ButtonModule,
    AlertModule,
    MultiSelectModule,
    DatePickerModule,
    DateRangePickerModule,
    TimePickerModule,
    ModalModule

  ]
})
export class SharedModule { }
