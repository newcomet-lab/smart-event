import { Component, OnInit } from '@angular/core';

import { User } from '../../../_models/index';
import { UserService } from '../../../_services/index';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'alljobposting.component.html',
    styleUrls: ['alljobposting.component.css']
})

export class AlljobpostingComponent implements OnInit {


    constructor(private userService: UserService) {

    }

    ngOnInit() {
        
    }

    
}