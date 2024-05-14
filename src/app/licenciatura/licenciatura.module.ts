import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LicenciaturaRoutingModule } from './licenciatura-routing.module';
import { TuiForModule } from '@taiga-ui/cdk';
import { TuiInputModule } from '@taiga-ui/kit';
import { LicenciaturaFormComponent } from './components/form/form.component';
import { SharedModule } from '../shared/shared.module';
import { LicenciaturasComponentPage } from './pages/all/all.component';
import { RouterLink, RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    LicenciaturaFormComponent,
    LicenciaturasComponentPage
  ],
  imports: [
    CommonModule,
    RouterModule,
    RouterLink,
    TuiForModule,
    TuiInputModule,
    LicenciaturaRoutingModule,
    SharedModule,
  ]
})
export class LicenciaturaModule { }
