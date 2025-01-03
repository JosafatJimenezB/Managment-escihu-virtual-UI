import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cycle, CyclePagination } from '../classes/cycle.class';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class CycleService {
  constructor(private httpClient: HttpClient) {}

  private path = environment.api_url;

  getAll(currentPage: number, pageSize: number): Observable<CyclePagination> {
    return this.httpClient.get<CyclePagination>(
      `${this.path}/api/v1/cycles/paginated?pageSize=${pageSize}&currentPage=${currentPage}`
    );
  }

  create(cycle: any): Observable<any> {
    return this.httpClient.post(`${this.path}/api/v1/cycles`, cycle);
  }

  getById(id: number): Observable<Cycle> {
    return this.httpClient.get<Cycle>(`${this.path}/api/v1/cycles/${id}`);
  }

  updateById(id: number, cycle: Cycle): Observable<any> {
    return this.httpClient.put(`${this.path}/api/v1/cycles/${id}`, cycle, {
      observe: 'response',
    });
  }
}
