import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/auth/services/auth.service";

@Component({
  selector: 'menu-nav',
  templateUrl: './menu.component.html',
})
export class MenuPageComponent {

  constructor(
    private authService: AuthService,
    private readonly router: Router,
  ){}

  logout(): void{
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
