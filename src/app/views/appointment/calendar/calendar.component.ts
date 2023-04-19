import { Title } from '@angular/platform-browser';
import { Client } from './../../clients/model/client.model';
import { Appointment } from './../model/appointment.model';
import { AppointmentService } from './../services/appointment.service';
import { AfterViewInit, Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import { FullCalendarComponent } from '@fullcalendar/angular'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import timeGridPlugin from '@fullcalendar/timegrid';
import allLocales from '@fullcalendar/core/locales-all';
import bootstrap5Plugin from '@fullcalendar/bootstrap5';
import * as moment from 'moment-timezone';
import { SharedService } from 'src/app/shared/sharedService.service';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {

  @Output() dataSelecionada = new EventEmitter();

  today = new Date();
  todayStr: string = this.today.toISOString().replace(/T.*$/, '');
  viewTime = '17:00';
  timezone = 'America/Sao_Paulo';
  liveDemoVisible!: boolean
  showModalRegister!: boolean
  dateAppointment: any

  events: any = [

  ];

  appointment:any = {
    id:'',
    client: '',
    date: '',
    time: '',
    service: '',
    professional: '',
    dia:''
  }

  closeModal() {
    this.liveDemoVisible = false
  }
  handleLiveDemoChange($event: any) {
    console.log($event.event);
    this.appointment.id = $event.event.extendedProps.id
    this.appointment.client = $event.event.extendedProps.client
    this.appointment.date = moment.utc($event.event.startStr).format('DD/MM/YYYY')
    this.appointment.time = $event.event.extendedProps.time
    this.appointment.service = $event.event.extendedProps.service
    this.appointment.professional = $event.event.extendedProps.professional,
    this.appointment.dia = moment($event.event.startStr).locale('pt-br').format('dddd')


    console.log(this.appointment);
    this.liveDemoVisible = !this.liveDemoVisible
  }
  changeVisibilityModal(data: any) {
    this.appointmentService.dateAppointmentModal = moment(data.dateStr).format('YYYY-MM-DD')
    this.showModalRegister = !this.showModalRegister
  }
  removeIem(id:any){
    this.appointmentService.delete(id).subscribe({
      next: () => {
        this.calendarComponent.getApi().removeAllEvents();
        this.getAppointments()
      }
    })

  }

  navigatePerfil(id:any){
    console.log(id);
  }

  calendarOptions: CalendarOptions = {
    plugins: [
      dayGridPlugin,
      interactionPlugin,
      listPlugin,
      timeGridPlugin,
      bootstrap5Plugin
    ],


    themeSystem: 'bootstrap5',
    locales: allLocales,
    locale: 'pt-br',
    timeZone: 'America/Sao_Paulo',
    initialDate: this.todayStr,
    weekNumberCalculation: 'ISO',
    height: 'auto',
    contentHeight: 'auto',
    // aspectRatio: 2,
    initialView: 'dayGridMonth',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    editable: true,
    selectable: true,
    droppable: true,
    navLinks: true,
    events: this.events,

    // eventDidMount:function(info){
    //   console.log(info.event);
    // },
    dateClick: this.changeVisibilityModal.bind(this),
    //event of doroppable
    // eventDragStart(arg) {
    //   console.log(arg.event.startStr);
    // },
    // eventDragStop(arg) {
    //   console.log(arg.event.startStr);
    //   console.log(arg);
    // },
    eventResizeStart(arg) {
      console.log(arg.event.startStr);

    },
    // eventClick(arg) {
    //   console.log("ola mundo")
    // },


    // eventDragMinDistance: 10,

    eventClick: this.handleLiveDemoChange.bind(this),
    // eventMouseEnter: function (info) {
    //   console.log(info.event);
    // },

  };

  @ViewChild('calendar') calendarComponent!: FullCalendarComponent;
  calendar: any;
  menuOpen = false;

  constructor(
    public appointmentService: AppointmentService,
    private sharedService: SharedService
  ) { }

  ngOnInit(): void {
    this.getAppointments()
    this.sharedService.getMenuOpen().subscribe(menuOpen => {
      this.menuOpen = menuOpen;
        setTimeout(() => {
          this.calendarComponent.getApi().updateSize();
        }, 500)
    })
  }

  AfterViewInit() {
    const calendarApi = this.calendarComponent.getApi();
    setTimeout(() => {
      calendarApi.updateSize();
    }, 1000);
  }
  addItem($event: Appointment) {
    this.calendarComponent.getApi().removeAllEvents();
    this.getAppointments()
  }

  getAppointments() {


    this.appointmentService.get().subscribe({
      next: (appointments) => {

        this.appointmentService.list = appointments
        console.log({appointments:this.appointmentService.list})
        this.appointmentService.list.forEach((appointment: any) => {
          console.log(appointment._id);
          this.calendarComponent.getApi().addEvent({
            title: appointment.client.name,
            extendedProps: {
              id: appointment._id,
              date: appointment.date,
              time: appointment.time,
              client: appointment.client,
              service: appointment.service,
              professional: appointment.professional
            },
            start: `${(moment.utc(appointment.date).format('YYYY-MM-DD'))}T${appointment.time}:00.000Z`,
            //2023-04-07T00:00:00.000Z
            color: '#51cc8a',
          })

        }
        )
      },
      error: (err) => console.log('Error', err)
    })

  }
}
