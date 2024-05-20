import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { RouterLinkActive } from '@angular/router';
import { ClassroomService } from '../../services/classroom.service';
import { ClassroomPaginated, Pageable } from '../../classes/classroom.class';

@Component({
  selector: 'classroom-main-page',
  templateUrl: 'all.component.html'
})

export class ClassroomMainPageComponent implements OnInit, OnDestroy {

  readonly columns = ['id', 'name', 'description', 'createdAt', 'updatedAt', 'update']

  classroomResponse: ClassroomPaginated = new ClassroomPaginated();

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
      caption: 'Salones',
      routerLink: 'salones',
      RouterLinkActive: RouterLinkActive
    }
  ]

  private classroomService = inject(ClassroomService);

  constructor() { }

  ngOnInit(): void {
    this.getClassrooms();
  }

  ngOnDestroy() {
    this.classroomResponse = new ClassroomPaginated();
  }

  getClassrooms() {
    this.classroomService.getAll(this.pageSize, this.currentPage).subscribe(
      (response) => {
        this.classroomResponse = response;
        this.pagination = response.pageable;
    });
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.getClassrooms();
  }

  onSizeChange(size: number): void {
    this.pageSize = size;
    this.getClassrooms();
  }
}
