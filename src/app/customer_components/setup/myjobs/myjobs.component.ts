import { Component, OnInit } from '@angular/core';

import { User } from '../../../_models/index';
import { UserService } from '../../../_services/index';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'myjobs.component.html',
    styleUrls: ['myjobs.component.css']
})

export class MyjobsComponent implements OnInit {


    constructor(private userService: UserService) {

    }

    ngOnInit() {
        
    }

    
}