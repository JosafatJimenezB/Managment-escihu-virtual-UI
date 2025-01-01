import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassroomsRoutingModule } from './classrooms-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TuiForModule } from '@taiga-ui/cdk';
import { TuiElasticContainerModule, TuiInputModule } from '@taiga-ui/kit';
import { SharedModule } from '../shared/shared.module';
import { ClassroomMainPageComponent } from './pages/all/all.component';
import { TuiTableModule, TuiTablePaginationModule } from '@taiga-ui/addon-table';
import { ClassroomFormComponent } from './components/form/form.component';
import { TuiAlertModule, TuiButtonModule, TuiDialogModule, TuiHintModule } from '@taiga-ui/core';
import { ClassroomCreateModalComponent } from './components/create/create-modal.component';
import { ClassroomUpdateModalComponent } from './components/update/update-modal.component';


@NgModule({
  declarations: [
    ClassroomMainPageComponent,
    ClassroomFormComponent,
    ClassroomCreateModalComponent,
    ClassroomUpdateModalComponent,
  ],
  imports: [
    CommonModule,
    ClassroomsRoutingModule,
    RouterModule,
    FormsModule,
    TuiForModule,
    TuiInputModule,
    TuiButtonModule,
    TuiElasticContainerModule,
    TuiTableModule,
    TuiTablePaginationModule,
    TuiAlertModule,
    TuiDialogModule,
    TuiHintModule,
    SharedModule,
  ],
  exports: [
  ]
})
export class ClassroomsModule { }
