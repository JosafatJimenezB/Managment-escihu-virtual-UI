import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLinkActive } from '@angular/router';
import { Cycle, CyclePagination, Pageable } from '../../classes/cycle.class';
import { CycleService } from '../../services/cycle.service';

@Component({
  selector: 'cycle-main-page',
  templateUrl: 'all.component.html'
})

export class CyclesPageComponent implements OnInit, OnDestroy {

  readonly columns = ['id', 'name', 'createdAt', 'updatedAt', 'closedAt', 'update', 'delete']

  cycleResponse: CyclePagination = new CyclePagination();

  pagination: Pageable = new Pageable();

  currentPage: number = 0;
  pageSize: number = 10;

  items = [
    {
      caption: 'Dashboard',
      routerLink: 'dashboard',
      RouterLinkActive: RouterLinkActive
    },
    {
      caption: 'Ciclo escolares',
      routerLink: 'ciclos-escolares',
      RouterLinkActive: RouterLinkActive
    }
  ]

  constructor(
    private readonly cycleService: CycleService,
  ) { }

  ngOnInit(): void {
    this.getCycles();
  }

  ngOnDestroy() {
    this.cycleResponse = new CyclePagination();
  }

  getCycles(): void {
    this.cycleService.getAll(this.currentPage, this.pageSize).subscribe(
      (res) => {
        this.cycleResponse = res;
        this.pagination = res.pageable;
      },
      (err) => {
      }
    );
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.getCycles();
  }

  onSizeChange(size: number): void {
    this.pageSize = size;
    this.getCycles();
  }

}
