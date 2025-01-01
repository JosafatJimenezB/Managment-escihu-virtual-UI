import { Component, inject, OnInit } from '@angular/core';
import { RouterLinkActive } from '@angular/router';
import { TeacherService } from '../../services/teacher.service';
import { TeacherPaginated } from '../../classes/pagination.class';

@Component({
  selector: 'teacher-main-page',
  templateUrl: 'all.component.html'
})

export class TeacherMainPageComponent implements OnInit {

  private teacherService = inject(TeacherService)

  readonly columns = ['id', 'name', 'apellidoPaterno', 'apellidoMaterno', 'areaConocimientos', 'update', 'delete']

  currentPage: number = 0;
  pageSize: number = 10;

  teacherResponse: TeacherPaginated = new TeacherPaginated()

  items = [
    {
      caption: 'Dashboard',
      routerLink: 'dashboard',
      RouterLinkActive: RouterLinkActive
    },
    {
      caption: 'Docentes',
      routerLink: 'docentes',
      RouterLinkActive: RouterLinkActive
    }
  ]

  ngOnInit(): void {
    this.getAllTeachers()
  }

  getAllTeachers(): void {
    this.teacherService.getAll(this.currentPage, this.pageSize).subscribe(
      data => {
        console.log(data)
        this.teacherResponse = data
      },
      error => {
        console.log(error)
      }
    )
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.getAllTeachers();
  }

  onSizeChange(size: number): void {
    this.pageSize = size;
    this.getAllTeachers();
  }
}
