import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { TuiForModule } from '@taiga-ui/cdk';
import { TuiTableModule, TuiTablePaginationModule } from '@taiga-ui/addon-table';
import { TuiElasticContainerModule, TuiInputModule } from '@taiga-ui/kit';
import { TuiAlertModule, TuiButtonModule, TuiDialogModule, TuiHintModule } from '@taiga-ui/core';
import { CyclesRoutingModule } from './cycles-routing.module';

import { CyclesPageComponent } from './pages/all/all.component';
import { CycleFormComponent } from './components/form/form.component';
import { CreateModalComponent } from './components/create/create-modal.component';
import { UpdateModalComponent } from './components/update/update-modal.component';
import { CycleByIdPageComponent } from './pages/cycle-by-id/cycle-by-id.component';


@NgModule({
  declarations: [
    CyclesPageComponent,
    CycleByIdPageComponent,
    CycleFormComponent,
    CreateModalComponent,
    UpdateModalComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    TuiForModule,
    TuiInputModule,
    TuiElasticContainerModule,
    TuiTableModule,
    TuiTablePaginationModule,
    TuiButtonModule,
    TuiDialogModule,
    TuiAlertModule,
    TuiHintModule,
    CyclesRoutingModule,
    SharedModule,
  ],
  exports: [
    CyclesPageComponent
  ]
})
export class CyclesModule { }
