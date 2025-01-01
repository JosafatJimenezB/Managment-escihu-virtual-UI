import { Component, inject, Inject, OnDestroy, OnInit } from "@angular/core";
import { RouterLinkActive } from "@angular/router";
import { TuiThemeNightService } from "@taiga-ui/addon-doc";
import { TuiBrightness } from "@taiga-ui/core";
import { DashboardService } from "../services/dashboard.service";
import { UserDetailsList } from "../interfaces/user.class";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardPageComponent implements OnInit, OnDestroy{

  items = [
    {
      caption: 'Dashboard',
      routerLink: 'dashboard',
      RouterLinkActive: RouterLinkActive
    }
  ]

  user: UserDetailsList = new UserDetailsList();

  private dashboardService = inject(DashboardService);

  ngOnInit(): void {
    this.getUser();
  }

  ngOnDestroy(): void {
    this.user = new UserDetailsList();
  }

  getUser(): void {
    this.user = this.dashboardService.getLocalData();
  }
}
