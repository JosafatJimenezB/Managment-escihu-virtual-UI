import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDetailsList, UserList } from '../interfaces/user.class';
import { environment } from 'src/environments/environment';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private cookieService = inject(CookieService);

  constructor(private readonly http: HttpClient) {
    this.getUsers(10);
  }

  path = environment.api_url;

  getUsers(pageSize: number, currentPage?: number): Observable<UserList> {
    if (pageSize === 0 || pageSize === null) {
      pageSize = 10;
    }

    if (
      currentPage === 0 ||
      currentPage === undefined ||
      currentPage === null
    ) {
      currentPage = 0;
    }
    return this.http.get<UserList>(
      `${this.path}/api/v1/admin/list_users?pageSize=${pageSize}&currentPage=${currentPage}`
    );
  }

  getLocalData(): UserDetailsList {
    let user: UserDetailsList = new UserDetailsList();

    user.username = this.cookieService.get('username') || '';
    user.role.authority = this.cookieService.get('role') || '';

    return user;
  }
}
