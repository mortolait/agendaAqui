import { Component } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';

import { logoNegative, sygnet } from '../../icons/brand';
import { navItems } from './_nav';
import { AppointmentService } from 'src/app/views/appointment/services/appointment.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {

  constructor(
    private router: Router,
    private appointmentService:AppointmentService
  ) {
    this.titleSubscribe();
  }

  public logoNegative = logoNegative;
  public sygnet = sygnet;

  public title!: string;

  public navItems = navItems;

  public perfectScrollbarConfig = {
    suppressScrollX: true
  };

  onButtonClick(): void {
    this.appointmentService.updateCalendarSize();
  }
  
  titleSubscribe() {
    this.router.events.pipe(
      filter(event => event instanceof ActivationEnd && !event.snapshot.firstChild),
      map(value => {
        const activatedRoute = <ActivatedRoute><unknown>value;
        return activatedRoute.snapshot?.data?.['title'] ?? null;
      })
    ).subscribe((title: string | null) => {
      this.title = title ?? 'Title';
    });
  }
}
