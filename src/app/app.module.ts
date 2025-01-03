import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import { TuiRootModule, TUI_SANITIZER, TuiThemeNightModule, TuiModeModule } from "@taiga-ui/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from "./auth/auth.module";
import { SharedModule } from "./shared/shared.module";
import { AuthInterceptor } from "./auth/helpers/auth.interceptor";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { CookieService } from "ngx-cookie-service";
import { NgHttpLoaderModule } from "ng-http-loader";
import { LicenciaturaModule } from "./licenciatura/licenciatura.module";
import { CyclesModule } from "./cycles/cycles.module";
import { ClassroomsModule } from "./classrooms/classrooms.module";
import { UserModule } from "./user/user.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgHttpLoaderModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
    TuiRootModule,
    TuiThemeNightModule,
    TuiModeModule,
    AuthModule,
    CyclesModule,
    ClassroomsModule,
    LicenciaturaModule,
    UserModule,
    SharedModule,
],
  providers: [
    CookieService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    {provide: TUI_SANITIZER, useClass: NgDompurifySanitizer},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
