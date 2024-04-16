import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuPageComponent } from './menu/pages/menu.component';
import { RouterLink } from '@angular/router';
import { PageNotFoundComponent } from './not-found/not-found.component';
import { ThemeSwitchComponent } from './theme-switch/theme-switch.component';



@NgModule({
  declarations: [
    MenuPageComponent,
    PageNotFoundComponent,
    ThemeSwitchComponent,
  ],
  imports: [
    CommonModule,
    RouterLink,
  ],
  exports: [
    MenuPageComponent,
    PageNotFoundComponent,
    ThemeSwitchComponent,
  ]
})
export class SharedModule { }
