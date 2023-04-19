import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedService } from 'src/app/core/services/shared.service';
import { ClientsService } from '../../clients/services/clients.service';
import { ProfessionalService } from '../../professional/service/professional-service.service';
import { AppointmentService } from '../services/appointment.service';
import { Appointment } from '../model/appointment.model';
import { Router } from '@angular/router';
import { S } from '@fullcalendar/core/internal-common';

@Component({
  selector: 'app-new-appointment',
  templateUrl: './new-appointment.component.html',
  styleUrls: ['./new-appointment.component.scss'],
})
export class NewAppointmentComponent {
  constructor(
    private router: Router,
    public clientService: ClientsService,
    public profesisonalService: ProfessionalService,
    public appointmentService: AppointmentService,
    public sharedService: SharedService
  ) { }

  newAppointmentForm!: FormGroup;
  states!: any;
  customValidate: boolean = false;
  type!:String;
  msg!:String;
  
  ngOnInit(): void {
    this.getClients();
    this.getProfessional();
    this.getService();
    this.newAppointmentForm = new FormGroup({
      date: new FormControl('', [Validators.required]),
      time: new FormControl('', [Validators.required]),
      professional: new FormControl('', [Validators.required]),
      client: new FormControl('', [Validators.required]),
      service: new FormControl('', [Validators.required]),
      value: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      cep: new FormControl('', [Validators.required]),
      uf: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      district: new FormControl('', [Validators.required]),
      number: new FormControl('', [Validators.required]),
      complement: new FormControl(''),
    });
  }

  register() {

    let newAppointment = this.newAppointmentForm.getRawValue() as Appointment;
    if (this.newAppointmentForm.valid) {
      console.log(this.newAppointmentForm);
      this.appointmentService.create(newAppointment).subscribe({
        next: (response) => {
          this.customValidate = false;
          this.router.navigate([`../appointment/${response}`]);
        },
        error: (err) => {
          console.log(err);
        },
      });
    }else{
      console.log('invalido');
    }

  }

  getClients() {
    this.clientService.get().subscribe({
      next: (data) => {
        this.clientService.clients = data;
        this.newAppointmentForm.controls['client'].setValue(this.clientService.clients[0]);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  getProfessional() {
    this.profesisonalService.get().subscribe({
      next: (data) => {
        this.profesisonalService.professionals = data;
        this.newAppointmentForm.controls['professional'].setValue(this.profesisonalService.professionals[0]);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  getService() {
    this.appointmentService.getTypeService().subscribe({
      next: (response) => {
        console.log({ response });
        this.appointmentService.typesService = response;
        this.newAppointmentForm.controls['service'].setValue(this.appointmentService.typesService[0]);
      },
    });
  }

  getStates() {
    this.sharedService.getStates().subscribe({
      next: (response) => {
        this.sharedService.states = response;
      },
    });
  }
}
