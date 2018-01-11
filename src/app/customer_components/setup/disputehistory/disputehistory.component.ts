import { Component, OnInit } from '@angular/core';

import { User } from '../../../_models/index';
import { UserService } from '../../../_services/index';

import { Router } from '@angular/router';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'disputehistory.component.html',
    styleUrls: ['disputehistory.component.css']
})

export class CustomerdisputehistoryComponent implements OnInit {

    constructor(private router: Router , private userService: UserService) {

    }

    ngOnInit() {

        
    }

    gotoDisputeboard()
    {
        this.router.navigate(['/customer/disputeboard']);
    }


}