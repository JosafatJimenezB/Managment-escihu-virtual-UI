import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserList } from "../interfaces/user.class";
import { environment } from "src/app/environment/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private readonly http: HttpClient) {
    this.getUsers(10);
  }

  path = environment.API_URL;

  getUsers(pageSize: number): Observable<UserList> {
    return this.http.get<UserList>(`${this.path}/api/v1/admin/list_users/${pageSize}`)
  }


}
