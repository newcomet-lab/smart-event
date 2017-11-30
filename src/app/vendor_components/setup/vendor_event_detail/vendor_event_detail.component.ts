import { Component, OnInit, ViewChild  } from '@angular/core';
import { CalendarComponent } from 'ng-fullcalendar';
import { Options } from 'fullcalendar';

import { User } from '../../../_models/index';
import { UserService } from '../../../_services/index';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'vendor_event_detail.component.html',
    styleUrls: ['vendor_event_detail.component.css']
})

export class Vendor_event_detailComponent implements OnInit {

    calendarOptions: Options;
  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;

    currentUser: User;
    users: User[] = [];

    flag_contact_vendor : boolean;

    model: any= {};

    
    constructor(private userService: UserService) {
        
    }

    eventClick(evt)
    {

    }
    updateEvent(evt)
    {

    }
    clickButton(evt)
    {

    }

    ngOnInit() {
        this.model.yourmessage = "";
        this.flag_contact_vendor = true;

        this.calendarOptions = {
            editable: true,
            eventLimit: false,
            header: {
              left: 'prev,next today',
              center: 'title',
              right: 'month,agendaWeek,agendaDay,listMonth'
            },
            events: []
          };
    }

    
}