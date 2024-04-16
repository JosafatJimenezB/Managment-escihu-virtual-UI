import { Component, Inject } from "@angular/core";
import { TuiThemeNightService } from "@taiga-ui/addon-doc";
import { TuiBrightness } from "@taiga-ui/core";

@Component({
  selector: 'theme-switch',
  templateUrl: './theme-switch.component.html',
})
export class ThemeSwitchComponent {

  constructor(@Inject(TuiThemeNightService) readonly night: TuiThemeNightService) {}

  get mode(): TuiBrightness | null {
    return this.night.value ? 'onDark' : null;
  }
}
