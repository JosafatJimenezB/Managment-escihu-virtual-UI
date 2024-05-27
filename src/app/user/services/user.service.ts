import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/app/environment/environment.prod';
import { Observable } from 'rxjs';
import { UserPaged } from '../classes/user.class';

@Injectable({providedIn: 'root'})
export class UserService {

  private path = environment.API_URL;

  constructor(private httpClient: HttpClient) { }

  getAll(currentPage: number, pageSize: number): Observable<UserPaged> {
    return this.httpClient.get<UserPaged>(`${this.path}/api/v1/admin/list_users?currentPage=${currentPage}&pageSize=${pageSize}`)
  }
}
