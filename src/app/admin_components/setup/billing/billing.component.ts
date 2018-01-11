import { Component, OnInit } from '@angular/core';

import { User } from '../../../_models/index';
import { UserService , ModalService } from '../../../_services/index';
import { Router } from '@angular/router';


@Component({
    moduleId: module.id.toString(),
    templateUrl: 'billing.component.html',
    styleUrls: ['billing.component.css']
})

export class BillingComponent implements OnInit {


    constructor(private router: Router , private userService: UserService , private modalService: ModalService) {

    }

    ngOnInit() {

    	
        
    }

    

    
}