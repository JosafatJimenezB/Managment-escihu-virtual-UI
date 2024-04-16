import { Component, Inject, OnInit } from "@angular/core";
import { RouterLinkActive } from "@angular/router";
import { TuiThemeNightService } from "@taiga-ui/addon-doc";
import { TuiBrightness } from "@taiga-ui/core";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardPageComponent implements OnInit{

  items = [
    {
      caption: 'Dashboard',
      routerLink: 'dashboard',
      RouterLinkActive: RouterLinkActive
    }
  ]

  ngOnInit(): void {
  }
}
