import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuPageComponent } from './menu/pages/menu.component';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './not-found/not-found.component';
import { ThemeSwitchComponent } from './theme-switch/theme-switch.component';
import { NoContentComponent } from './no-content/no-content.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { TuiBreadcrumbsModule } from '@taiga-ui/kit';

@NgModule({
  declarations: [
    MenuPageComponent,
    PageNotFoundComponent,
    ThemeSwitchComponent,
    NoContentComponent,
    BreadcrumbsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    TuiBreadcrumbsModule,
  ],
  exports: [
    MenuPageComponent,
    PageNotFoundComponent,
    ThemeSwitchComponent,
    NoContentComponent,
    BreadcrumbsComponent,
  ]
})
export class SharedModule { }
