import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLinkActive } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'users-find-by-id',
  templateUrl: 'user-by-id.component.html'
})

export class UserByIdPageComponent implements OnInit {

  private route = inject(ActivatedRoute);

  userId: number = this.route.snapshot.params['userId'];

  items = [
    {
      caption: 'Dashboard',
      routerLink: 'dashboard',
      RouterLinkActive: RouterLinkActive
    },
    {
      caption: 'Usuarios',
      routerLink: 'usuarios',
      RouterLinkActive: RouterLinkActive
    },
    {
      caption: 'Usuario',
      routerLink: 'user',
      RouterLinkActive: RouterLinkActive
    }
  ]

  ngOnInit() {
    console.log(this.userId)
  }
}
