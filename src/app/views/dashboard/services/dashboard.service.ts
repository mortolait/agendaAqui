import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const API = environment.url_base;

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(
    private httpClient: HttpClient
  ) { }



  getCountAppointment() {
    return this.httpClient.get<any>(`${API}/appointments/count`)
  }

}

