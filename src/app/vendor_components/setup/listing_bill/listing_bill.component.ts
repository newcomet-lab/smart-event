import { Component, OnInit } from '@angular/core';

import { User } from '../../../_models/index';
import { UserService } from '../../../_services/index';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'listing_bill.component.html',
    styleUrls: ['listing_bill.component.css']
})

export class Listing_billComponent implements OnInit {
    currentUser: User;
    users: User[] = [];
    
    constructor(private userService: UserService) {
        
    }

    ngOnInit() {
        
    }

    
}