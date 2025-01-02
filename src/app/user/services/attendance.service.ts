import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AttendancePaged, CreateAttendance } from '../classes/attendance.class';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class AttendanceService {
  private path = environment.api_url;

  private http = inject(HttpClient);

  getAll(
    userId: number,
    currentPage: number,
    pageSize: number
  ): Observable<AttendancePaged> {
    return this.http.get<AttendancePaged>(
      `${this.path}/api/v1/attendance/${userId}/paginated?currentPage=${currentPage}&pageSize=${pageSize}`
    );
  }

  create(attendance: CreateAttendance): Observable<any> {
    return this.http.post<any>(
      `${this.path}/api/v1/attendance/register`,
      attendance
    );
  }
}
