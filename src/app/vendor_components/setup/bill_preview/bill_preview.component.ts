import { Component, OnInit } from '@angular/core';

import { User } from '../../../_models/index';
import { UserService } from '../../../_services/index';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'bill_preview.component.html',
    styleUrls: ['bill_preview.component.css']
})

export class Bill_previewComponent implements OnInit {
    currentUser: User;
    users: User[] = [];
    
    constructor(private userService: UserService) {
        
    }

    ngOnInit() {
        
    }

    
}