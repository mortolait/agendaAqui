import { Component, Input, ViewChild } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { ClassToggleService, HeaderComponent } from '@coreui/angular-pro';
import { logoNegative } from '../../../icons/brand';
import { SharedService } from 'src/app/shared/sharedService.service';

// import { CalendarComponent } from "../../../views/appointment/calendar/calendar.component"
// import { Calendar } from '@fullcalendar/core';

@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
})
export class DefaultHeaderComponent extends HeaderComponent {

  @Input() sidebarId: string = "sidebar1";

  public logoNegative = logoNegative;

  public newMessages = new Array(4)
  public newTasks = new Array(5)
  public newNotifications = new Array(5)

  // calendar!: Calendar;

  public themeSwitch = new UntypedFormGroup({
    themeSwitchRadio: new UntypedFormControl('light'),
  });

  constructor(private classToggler: ClassToggleService,
    //  private calendarComponent: CalendarComponent
    private sharedService: SharedService
  ) {
    super();
  }

  ngOnInit(): void {
    // this.calendar = this.calendarComponent.calendar;
  }
  setTheme(value: string): void {

    this.themeSwitch.setValue({ themeSwitchRadio: value });
    this.classToggler.toggle('body', 'dark-theme');
  }

  updateMenu(){
    this.sharedService.toggleMenu();
  }
  //   updateCalendarSize() {
  //     this.calendar.updateSize();
  //   }
}
