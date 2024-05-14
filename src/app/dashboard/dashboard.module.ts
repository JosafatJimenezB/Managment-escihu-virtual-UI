import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import {TuiTablePaginationModule} from '@taiga-ui/addon-table';
import {TuiTableModule} from '@taiga-ui/addon-table';

import { DashboardPageComponent } from './pages/dashboard.component';
import { ListUsersPageComponent } from './pages/list-users/list-users.component';
import { BreadcrumbsComponent } from '../shared/breadcrumbs/breadcrumbs.component';
import { TuiBreadcrumbsModule, TuiElasticContainerModule } from '@taiga-ui/kit';
import { RouterLink } from '@angular/router';
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
    RouterLink,
    SharedModule,
    TuiLoaderModule,
    TuiForModule,
    TuiTablePaginationModule,
    TuiTableModule,
    TuiElasticContainerModule,
  ],
  exports: [
    DashboardPageComponent,
  ]
})
export class DashboardModule { }
