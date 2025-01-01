import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import {TuiTablePaginationModule} from '@taiga-ui/addon-table';
import {TuiTableModule} from '@taiga-ui/addon-table';

import { DashboardPageComponent } from './pages/dashboard.component';
import { ListUsersPageComponent } from './pages/list-users/list-users.component';
import { TuiBadgeModule, TuiElasticContainerModule } from '@taiga-ui/kit';
import { RouterLink, RouterModule } from '@angular/router';
import { TuiForModule } from '@taiga-ui/cdk';
import { TuiLoaderModule } from '@taiga-ui/core';

@NgModule({
  declarations: [
    DashboardPageComponent,
    ListUsersPageComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    RouterModule,
    RouterLink,
    SharedModule,
    TuiLoaderModule,
    TuiForModule,
    TuiTablePaginationModule,
    TuiTableModule,
    TuiBadgeModule,
    TuiElasticContainerModule,
  ],
  exports: [
    DashboardPageComponent,
  ]
})
export class DashboardModule { }
