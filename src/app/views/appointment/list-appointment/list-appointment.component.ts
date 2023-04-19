import { Router } from '@angular/router';
import { Appointment } from './../model/appointment.model';
import { Component } from '@angular/core';

import { AppointmentService } from '../services/appointment.service';

@Component({
  selector: 'app-list-appointment',
  templateUrl: './list-appointment.component.html',
  styleUrls: ['./list-appointment.component.scss'],
})
export class ListAppointmentComponent {
  constructor(public appointmentService: AppointmentService, private router: Router) { }

  visible: boolean = false
  itemSelectd!: Appointment;

  columns = [
    {
      key: 'professional_name',
      label: 'Profissional',
      _style: { width: '25%' },
    },
    { key: 'client_name', label: 'Cliente', _style: { width: '25%' } },
    { key: 'date', label: 'Data', filter: true, sorter: true, _style: { width: '15%' } },
    { key: 'time', label: 'Horario', _style: { width: '15%' } },
    { key: 'service', label: 'Serviço', _style: { width: '20%' } },
    {
      key: 'show',
      label: 'Acao',
    },
  ];

  ngOnInit(): void {
    this.getAppointments();
  }
  getAppointments() {
    this.appointmentService.get().subscribe({
      next: (appointments) => {
        this.appointmentService.list = appointments;
        this.appointmentService.list.forEach((item: any) => {
          item.id = item._id;
          item.professional_name = item.professional.name;
          item.client_name = item.client.name;
          item.service = item.service.name;
          item.date = item.date.split('T')[0];
        });
      },
      error: (err) => console.log('Error', err),
    });
  }

  checkSelected($event: any) {
    console.log($event);
  }

  getBadge(status: string) {
    switch (status) {
      case 'Adimplente':
        return 'success';
      case 'Inadimplente':
        return 'warning';
      default:
        return 'primary';
    }
  }

  getItem(item: any) {
    return Object.keys(item);
  }

  details_visible = Object.create({});

  toggleDetailst(item: any) {
    this.details_visible[item] = !this.details_visible[item];
  }


  perfilAppointment(appointment: Appointment) {
    this.router.navigate(['/appointment/' + appointment.id]);
  }
  deleteItem(id:string){
    this.appointmentService.delete(id).subscribe({
      next: (appointments) => {
        this.getAppointments();
      },
      error: (err) => console.log('Error', err),

    }
    );
  }
  register(){
    
  }
}
