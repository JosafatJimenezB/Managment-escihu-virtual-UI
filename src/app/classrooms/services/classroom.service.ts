import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/app/environment/environment.prod';
import { Observable } from 'rxjs';
import { Classroom, ClassroomPaginated } from '../classes/classroom.class';

@Injectable({providedIn: 'root'})
export class ClassroomService {

  private path = environment.API_URL;

  constructor(private httpClient: HttpClient) { }

  getAll(pageSize: number, currentPage: number): Observable<ClassroomPaginated> {
    return this.httpClient.get<ClassroomPaginated>(`${this.path}/api/v1/classrooms?currentPage=${currentPage}&pageSize=${pageSize}`);
  }

  getById(id: number): Observable<Classroom> {
    return this.httpClient.get<Classroom>(`${this.path}/api/v1/classroom/${id}`);
  }

  create(classroom: Classroom): Observable<Classroom> {
    return this.httpClient.post<Classroom>(`${this.path}/api/v1/classroom`, classroom);
  }

  updateById(id: number, classroom: Classroom): Observable<any> {
    return this.httpClient.put<Classroom>(`${this.path}/api/v1/classroom/${id}`, classroom, {observe: 'response'});
  }

}