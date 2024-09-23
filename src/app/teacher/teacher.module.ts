import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { TeacherMainPageComponent } from './pages/all/all.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TuiForModule } from '@taiga-ui/cdk';
import { TuiElasticContainerModule, TuiInputDateModule, TuiInputModule, TuiSelectModule } from '@taiga-ui/kit';
import { TeacherFormComponent } from './components/form/form.component';
import { TeacherCreateModalComponent } from './components/create/create-modal.component';
import { TuiAlertModule, TuiButtonModule, TuiDialogModule, TuiHintModule } from '@taiga-ui/core';
import { TuiTableModule, TuiTablePaginationModule } from '@taiga-ui/addon-table';
import { NativeDateTransformerDirective } from './directives/native-date-transformer.directive';


@NgModule({
  declarations: [
    TeacherMainPageComponent,
    TeacherFormComponent,
    TeacherCreateModalComponent,
    NativeDateTransformerDirective,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    TuiForModule,
    TuiElasticContainerModule,
    TuiInputModule,
    TuiInputDateModule,
    TuiSelectModule,
    TuiButtonModule,
    TuiTableModule,
    TuiTablePaginationModule,
    TuiAlertModule,
    TuiDialogModule,
    TuiHintModule,
    TeacherRoutingModule,
    SharedModule,
  ]
})
export class TeacherModule { }
