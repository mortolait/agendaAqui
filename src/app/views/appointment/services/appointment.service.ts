import { HttpClient } from '@angular/common/http';
import { Injectable, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';

import { Appointment, Appointments } from '../model/appointment.model';
import { environment } from 'src/environments/environment';
import { FullCalendarComponent } from '@fullcalendar/angular';

const API = environment.url_base;

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  private calendar!: FullCalendarComponent;

  constructor(private httpClient: HttpClient) { }

  list!: Appointments;
  typesService!: any;
  dateAppointmentModal:any =  null

  setCalendar(calendar: FullCalendarComponent): void {
    this.calendar = calendar;
  }

  updateCalendarSize(): void {
    setTimeout(() => {
      this.calendar.getApi().updateSize();
    }, 1000);
  }


  get(): Observable<Appointments> {
    return this.httpClient.get<Appointments>(`${API}/appointments`);
  }

  getById(id:String){
    return this.httpClient.get<Appointment>(`${API}/appointments/${id}`);
  }
  create(appointment: Appointment): Observable<Appointment> {
    return this.httpClient.post<Appointment>(`${API}/appointments`, appointment);
  }

  getTypeService(): Observable<any> {
    this.typesService = [];
    return this.httpClient.get<any>(`${API}/typeServices`);
  }

  delete(id:string): Observable<any> {
    return this.httpClient.delete<any>(`${API}/appointments/${id}`);
  }

  createService(){
    return this.httpClient.post<any>(`${API}/typeServices`,{name:'teste'});
  }

  update(appointment:Appointment,id:String): Observable<Appointment>{
    return this.httpClient.put<Appointment>(`${API}/appointments/${id}`,appointment)
  }

}
