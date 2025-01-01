import { Component, inject, Input, OnDestroy, OnInit } from '@angular/core';
import { AttendanceService } from '../../services/attendance.service';
import { AttendancePaged } from '../../classes/attendance.class';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'user-attendance-by-id',
  templateUrl: 'attendance.component.html'
})

export class AttendanceByUserComponent implements OnInit, OnDestroy {

  readonly columns = ['date', 'typeAttendance']

  private attendanceService = inject(AttendanceService);

  private route = inject(ActivatedRoute);

  userId: number = this.route.snapshot.params['userId'];

  attendaceResponse: AttendancePaged = new AttendancePaged();

  currentPage: number = 0;
  pageSize: number = 10;

  ngOnInit(): void {
    this.getAll();
  }

  ngOnDestroy(): void {
    this.attendaceResponse = new AttendancePaged();
  }

  getAll(): void {
    this.attendanceService.getAll(this.userId, this.currentPage, this.pageSize).subscribe(
      (res) => {
        this.attendaceResponse = res;
      },
      (error) => {
      }
    )
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.getAll();
  }

  onSizeChange(size: number): void {
    this.pageSize = size;
    this.getAll();
  }
}
