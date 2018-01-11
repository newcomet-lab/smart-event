import { Component, OnInit } from '@angular/core';

import { User } from '../../../_models/index';
import { UserService } from '../../../_services/index';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'disputeboard.component.html',
    styleUrls: ['disputeboard.component.css']
})

export class DisputeboardComponent implements OnInit {

    constructor(private userService: UserService) {

    }

    ngOnInit() {

    }

}