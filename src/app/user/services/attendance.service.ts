import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/app/environment/environment.prod';
import { Observable } from 'rxjs';
import { AttendancePaged, CreateAttendance } from '../classes/attendance.class';

@Injectable({providedIn: 'root'})
export class AttendanceService {

  private path = environment.API_URL;

  private http = inject(HttpClient);

  getAll(userId: number, currentPage: number, pageSize: number): Observable<AttendancePaged> {
    return this.http.get<AttendancePaged>(`${this.path}/api/v1/attendance/${userId}/paginated?currentPage=${currentPage}&pageSize=${pageSize}`)
  }

  create(attendance: CreateAttendance): Observable<any> {
    return this.http.post<any>(`${this.path}/api/v1/attendance/register`, attendance)
  }

}
