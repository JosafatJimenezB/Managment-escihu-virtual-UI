import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Credentials } from "../Interfaces/model";
import { map } from "rxjs";
import { environment } from "src/app/environment/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

   API_URL = environment.API_URL;

  constructor(
    private readonly http: HttpClient
  ) {
  }

  private httpOptions() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    })

    return { headers };
  }

  login(credentials: Credentials) {

    console.log(credentials)

    return this.http.post<Credentials>(`${this.API_URL}/api/v1/auth/login`, credentials,{
      observe: 'response'
    }).pipe(map((response: HttpResponse<any>) => {

      const body = response.body;

      localStorage.setItem('token', body.token);
      localStorage.setItem('username', body.username);
      localStorage.setItem('userAsigned', body.userAsigned);
      localStorage.setItem('role', body.role.authority)

      return body;
    }))
  }

  getProfile() {
    return localStorage.getItem('username');
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('userAsigned');
    localStorage.removeItem('role');
  }


}
