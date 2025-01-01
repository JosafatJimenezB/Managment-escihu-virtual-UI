import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LicenciaturaRoutingModule } from './licenciatura-routing.module';
import { TuiForModule } from '@taiga-ui/cdk';
import { TuiElasticContainerModule, TuiInputModule } from '@taiga-ui/kit';
import { LicenciaturaFormComponent } from './components/form/form.component';
import { SharedModule } from '../shared/shared.module';
import { LicenciaturasComponentPage } from './pages/all/all.component';
import { RouterLink, RouterModule } from '@angular/router';
import { TuiTableModule, TuiTbodyComponent } from '@taiga-ui/addon-table';
import { TuiAlertModule, TuiButtonModule, TuiDialogModule, TuiHintModule } from '@taiga-ui/core';
import { CreateModalComponent } from './components/create/create-modal.component';
import { FormsModule } from '@angular/forms';
import { UpdateModalComponent } from './components/update/update-modal.component';

@NgModule({
  declarations: [
    LicenciaturaFormComponent,
    LicenciaturasComponentPage,
    CreateModalComponent,
    UpdateModalComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    RouterLink,
    FormsModule,
    TuiForModule,
    TuiInputModule,
    TuiElasticContainerModule,
    TuiTableModule,
    TuiButtonModule,
    TuiInputModule,
    TuiDialogModule,
    TuiAlertModule,
    TuiHintModule,
    LicenciaturaRoutingModule,
    SharedModule,
  ]
})
export class LicenciaturaModule { }
