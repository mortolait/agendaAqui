import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


const API = environment.url_base;

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  states!: any;
  cities!: any;

  constructor(private httpClient: HttpClient) { }

  getStates(): Observable<any>{
    return this.httpClient.get<any>(`${API}/states`)
  }
  getCities(sigla:String): Observable<any>{
    return this.httpClient.get<any>(`${API}/states/cities/${sigla}`)
  }
  
}
