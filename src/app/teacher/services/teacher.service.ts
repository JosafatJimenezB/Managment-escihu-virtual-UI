import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TeacherPaginated } from '../classes/pagination.class';
import { Teacher } from '../classes/teacher.class';
import { ResponseCreation } from '../classes/Response.class';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class TeacherService {
  private path = environment.api_url;

  constructor(private httpClient: HttpClient) {}

  getAll(currentPage: number, pageSize: number): Observable<TeacherPaginated> {
    return this.httpClient.get<TeacherPaginated>(
      `${this.path}/api/v1/teachers/paginated?currentPage=${currentPage}&pageSize=${pageSize}`
    );
  }

  create(teacher: Teacher): Observable<ResponseCreation> {
    return this.httpClient.post<ResponseCreation>(
      `${this.path}/api/v1/teacher`,
      teacher
    );
  }
}
