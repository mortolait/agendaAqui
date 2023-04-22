import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Professional, Professionals } from '../model/professional.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const API = environment.url_base;

@Injectable({
  providedIn: 'root',
})
export class ProfessionalService {
  constructor(private httpClient: HttpClient) {}

  professionals!: Professionals;

  get(): Observable<Professionals> {
    this.professionals = []
    return this.httpClient.get<Professionals>(`${API}/professionals`);
  }
  getById(id: String): Observable<Professional>{
    return this.httpClient.get<Professional>(`${API}/professionals/${id}`)
  }
  create(profession:Professional): Observable<Professional>{
    return this.httpClient.post<Professional>(`${API}/professionals`,profession)
  }
  delete(id:String): Observable<Object>{
    return this.httpClient.delete<Object>(`${API}/professionals/${id}`)
  }
  update(profession:Professional,id:String): Observable<Professional>{
    return this.httpClient.put<Professional>(`${API}/professionals/${id}`,profession)
  }
}
