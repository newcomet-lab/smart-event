import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarComponent } from 'ng-fullcalendar';
import { Options } from 'fullcalendar';

import { User } from '../../../_models/index';
import { UserService } from '../../../_services/index';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'calendarview.component.html',
    styleUrls: ['calendarview.component.css']
})

export class CalendarviewComponent implements OnInit {

	calendarOptions: Options;
  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;

    currentUser: User;
    users: User[] = [];
    
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