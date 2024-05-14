import { Component, OnDestroy, OnInit } from '@angular/core';
import { Licenciatura } from '../../classes/licenciatura.class';
import { LicenciaturaService } from '../../services/licenciatura.service';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'licenciaturas-page',
  templateUrl: 'all.component.html'
})
export class LicenciaturasComponentPage implements OnInit, OnDestroy {

  licenciaturas: Licenciatura[] = [];

  items = [
    {
      caption: 'Dashboard',
      routerLink: 'dashboard',
      RouterLinkActive: RouterLinkActive
    },
    {
      caption: 'Licenciaturas',
      routerLink: 'licenciatura',
      RouterLinkActive: RouterLinkActive
    }
  ]

  constructor(
    private readonly licenciaturaService: LicenciaturaService
  ) { }

  ngOnInit(): void {
    this.getLicenciaturas();
  }

  ngOnDestroy(): void {
    this.licenciaturas = [];
  }

  getLicenciaturas(): void {
    this.licenciaturaService.getAll().subscribe(
      (res) => {
        this.licenciaturas = res;
        console.log(this.licenciaturas)
      },
      (err) => {
        console.error(err);
      }
    );
  }
}
