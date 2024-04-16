import { Component, Inject } from '@angular/core';
import { TuiThemeNightService } from '@taiga-ui/addon-doc';
import { TuiBrightness } from '@taiga-ui/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Managment-Escihu-Virtual-front';

  constructor(@Inject(TuiThemeNightService) readonly night: TuiThemeNightService) {}

  get mode(): TuiBrightness | null {
    return this.night.value ? 'onDark' : null;
  }
}
