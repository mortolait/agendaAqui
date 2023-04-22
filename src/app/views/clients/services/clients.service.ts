import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Clients, Client } from '../model/client.model';

const API = environment.url_base;

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  visibleModalConfirm:boolean = false
  clients: Clients = []

  constructor(private httpClient: HttpClient) {}

  get(): Observable<Clients> {
    this.clients = []
    return this.httpClient.get<Clients>(`${API}/clients`);
  }
  getClientById(id: String): Observable<Client>{
    return this.httpClient.get<Client>(`${API}/clients/${id}`)
  }
  getStates(): Observable<any>{
    return this.httpClient.get<any>(`${API}/states`)
  }
  getCities(sigla:String): Observable<Array<String>>{
    return this.httpClient.get<Array<String>>(`${API}/states/cities/${sigla}`)
  }
  create(client: Client): Observable<Client>{
    return this.httpClient.post<Client>(`${API}/clients`,client)
  }
  delete(id: String): Observable<Object>{
    return this.httpClient.delete<Object>(`${API}/clients/${id}`)
  }
  update(client: Client,id:String): Observable<Client>{
    return this.httpClient.put<Client>(`${API}/clients/${id}`,client)
  }
}

