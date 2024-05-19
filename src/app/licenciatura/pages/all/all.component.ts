import { Component, OnDestroy, OnInit } from '@angular/core';
import { Licenciatura } from '../../classes/licenciatura.class';
import { LicenciaturaService } from '../../services/licenciatura.service';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'licenciaturas-page',
  templateUrl: 'all.component.html'
})
export class LicenciaturasComponentPage implements OnInit, OnDestroy {

  readonly columns = ['id', 'username', 'code', 'update', 'delete'];

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
      },
      (err) => {
        console.error(err);
      }
    );
  }

  deleteById(id: number): void {
    this.licenciaturaService.deleteById(id).subscribe(
      (res) => {
        console.log(res)
        this.getLicenciaturas();
      },
      (err) => {
        console.error(err);
      }
    );
  }
}
