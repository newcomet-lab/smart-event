import { Component, OnInit } from '@angular/core';

import { User } from '../../../_models/index';
import { UserService } from '../../../_services/index';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'eventlist.component.html',
    styleUrls: ['eventlist.component.css']
})

export class EventlistComponent implements OnInit {
    currentUser: User;
    users: User[] = [];
    
    constructor(private userService: UserService) {
        
    }

    ngOnInit() {
        
    }

    
}