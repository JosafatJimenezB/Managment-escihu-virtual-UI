import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Licenciatura } from '../classes/licenciatura.class';

@Injectable({ providedIn: 'root' })
export class LicenciaturaService {
  private path = environment.api_url;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Licenciatura[]> {
    return this.http.get<Licenciatura[]>(`${this.path}/api/v1/licenciaturas`);
  }
}
