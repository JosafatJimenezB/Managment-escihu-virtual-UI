import { Component, Inject, OnInit } from '@angular/core';
import { TuiThemeNightService } from '@taiga-ui/addon-doc';
import { TuiBrightness } from '@taiga-ui/core';
import { initFlowbite } from 'flowbite';
import { Spinkit } from 'ng-http-loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'Escihu Virtual';

  public spinkit = Spinkit;

  constructor(@Inject(TuiThemeNightService) readonly night: TuiThemeNightService) {}

  get mode(): TuiBrightness | null {
    return this.night.value ? 'onDark' : null;
  }

  ngOnInit(): void {
    initFlowbite();
  }
}
