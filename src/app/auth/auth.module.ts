import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AuthRoutingModule } from './auth-routing.module';

import { LoginPageComponent } from './pages/login/login.component';
import { RegisterPageComponent } from './pages/register/register.component';
import { FormsModule } from '@angular/forms';
import { TuiAlertModule, TuiNotificationModule } from '@taiga-ui/core';
import { RouterLink } from '@angular/router';
import { TuiCheckboxModule } from '@taiga-ui/kit';



@NgModule({
  declarations: [
    LoginPageComponent,
    RegisterPageComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    HttpClientModule,
    TuiAlertModule,
    TuiNotificationModule,
    TuiCheckboxModule,
    RouterLink
  ],
  providers: [
  ]
})
export class AuthModule { }
