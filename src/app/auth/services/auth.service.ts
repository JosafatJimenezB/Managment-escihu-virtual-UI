import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Credentials } from '../Interfaces/model';
import { map } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  API_URL = environment.api_url;

  constructor(
    private readonly http: HttpClient,
    private cookieService: CookieService
  ) {}

  login(credentials: Credentials) {
    return this.http
      .post<Credentials>(`${this.API_URL}/api/v1/auth/login`, credentials, {
        observe: 'response',
      })
      .pipe(
        map((response: HttpResponse<any>) => {
          const body = response.body;

          this.cookieService.set('token', body.token);
          this.cookieService.set('username', body.username);
          this.cookieService.set('userAsigned', body.userAsigned);
          this.cookieService.set('role', body.role.authority);
          this.cookieService.set('token', body.token);

          return body;
        })
      );
  }

  getProfile() {
    return this.cookieService.get('username');
  }

  logout() {
    this.cookieService.deleteAll();
  }
}
