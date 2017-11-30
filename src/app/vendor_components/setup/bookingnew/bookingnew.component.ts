import { Component, OnInit, ViewChild } from '@angular/core';

import { User } from '../../../_models/index';
import { UserService } from '../../../_services/index';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'bookingnew.component.html',
    styleUrls: ['bookingnew.component.css']
})

export class BookingnewComponent implements OnInit {


    currentUser: User;
    users: User[] = [];

    model: any= {};
    
    constructor(private userService: UserService) {
        
    }

    ngOnInit() {

    	
    }

    doBooking()
    {
        
    }

    
}