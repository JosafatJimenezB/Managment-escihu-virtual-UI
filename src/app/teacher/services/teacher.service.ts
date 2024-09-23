import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/app/environment/environment.prod';
import { Observable } from 'rxjs';
import { TeacherPaginated } from '../classes/pagination.class';
import { Teacher } from '../classes/teacher.class';
import { ResponseCreation } from '../classes/Response.class';

@Injectable({providedIn: 'root'})
export class TeacherService {

  private path = environment.API_URL

  constructor(private httpClient: HttpClient) { }

  getAll(currentPage: number, pageSize: number): Observable<TeacherPaginated> {
    return this.httpClient.get<TeacherPaginated>(`${this.path}/api/v1/teachers/paginated?currentPage=${currentPage}&pageSize=${pageSize}`)
  }

  create(teacher: Teacher): Observable<ResponseCreation> {
    return this.httpClient.post<ResponseCreation>(`${this.path}/api/v1/teacher`, teacher)
  }

}
