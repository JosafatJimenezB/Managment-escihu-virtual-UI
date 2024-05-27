import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserMainPageComponent } from './pages/all/all.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { TuiDataListWrapperModule, TuiElasticContainerModule, TuiInputModule, TuiSelectModule } from '@taiga-ui/kit';
import { TuiForModule } from '@taiga-ui/cdk';
import { TuiTableModule, TuiTablePaginationModule } from '@taiga-ui/addon-table';
import { TuiAlertModule, TuiButtonModule, TuiDialogModule, TuiErrorModule, TuiHintModule, TuiTextfieldControllerModule } from '@taiga-ui/core';
import { UserByIdPageComponent } from './pages/user-by-id/user-by-id.component';
import { AttendanceByUserComponent } from './components/attendance/attendance.component';
import { UserAttendanceFormComponent } from './components/form/form.component';
import { UserAttendanceCreateModalComponent } from './components/create/create.component';


@NgModule({
  declarations: [
    UserMainPageComponent,
    UserByIdPageComponent,
    AttendanceByUserComponent,
    UserAttendanceCreateModalComponent,
    UserAttendanceFormComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    UserRoutingModule,
    TuiElasticContainerModule,
    TuiForModule,
    TuiTableModule,
    TuiTablePaginationModule,
    TuiInputModule,
    TuiSelectModule,
    TuiTextfieldControllerModule,
    TuiDataListWrapperModule,
    TuiButtonModule,
    TuiAlertModule,
    TuiDialogModule,
    TuiHintModule,
    TuiErrorModule,
    SharedModule,
  ]
})
export class UserModule { }
