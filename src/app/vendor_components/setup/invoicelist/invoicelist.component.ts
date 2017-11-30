import { Component, OnInit } from '@angular/core';

import { User } from '../../../_models/index';
import { UserService } from '../../../_services/index';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'invoicelist.component.html',
    styleUrls: ['invoicelist.component.css']
})

export class InvoicelistComponent implements OnInit {
    currentUser: User;
    users: User[] = [];

    duration_opt: String;
    status_title: String;
    
    constructor(private userService: UserService) {
        
    }

    ngOnInit() {
        this.duration_opt = "";
        this.status_title = "Pending"
    }

    statusUpdate(idnum , st_title)
    {
		this.status_title = st_title
    }

    
}