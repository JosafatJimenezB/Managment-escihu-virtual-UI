import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class UserService {
  private path = environment.api_url;

  constructor(private httpClient: HttpClient) {}

  getAll(currentPage: number, pageSize: number): Observable<any> {
    return this.httpClient.get<any>(
      `${this.path}/api/v1/admin/list_users?currentPage=${currentPage}&pageSize=${pageSize}`
    );
  }
}
