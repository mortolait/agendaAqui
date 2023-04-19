import { Appointment } from './../model/appointment.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppointmentService } from './../services/appointment.service';
import { ProfessionalService } from './../../professional/service/professional-service.service';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ClientsService } from '../../clients/services/clients.service';

@Component({
  selector: 'app-modal-calendar',
  templateUrl: './modal-calendar.component.html',
  styleUrls: ['./modal-calendar.component.scss']
})
export class ModalCalendarComponent {

  @Output() newItemEvent = new EventEmitter<Appointment>();

  @Input()
  showFormRegister:Boolean = false;


  newAppointmentForm!: FormGroup;
  customValidate: boolean = false;

  constructor(
    public profesisonalService: ProfessionalService,
    public clientService: ClientsService,
    public appointmentService: AppointmentService,
  ) {}


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

    this.newAppointmentForm.controls['date'].setValue(this.appointmentService.dateAppointmentModal);
  }


  getClients() {
    this.clientService.get().subscribe({
      next: (data) => {
        this.clientService.clients = data;
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
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  getService() {
    this.appointmentService.getTypeService().subscribe({
      next: (response) => {
        this.appointmentService.typesService = response;
        console.log(this.appointmentService.typesService);
      },
    });
  }

   register() {
    this.customValidate = true;
    this.appointmentService.create(this.newAppointmentForm.value).subscribe({
      next: (response) => {
        this.appointmentService.get().subscribe({
          next: (appointments) => {
            this.appointmentService.list = appointments;
            this.newItemEvent.emit(this.newAppointmentForm.value);
            this.newAppointmentForm.reset();

          }
        })
        this.showFormRegister = false;

      },
      error: (err) => {
        console.log(err);
      },
    });
  }

}
