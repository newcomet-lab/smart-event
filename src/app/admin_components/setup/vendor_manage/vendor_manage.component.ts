import { Component, OnInit } from '@angular/core';

import { User } from '../../../_models/index';
import { UserService , ModalService } from '../../../_services/index';
import { Router } from '@angular/router';


@Component({
    moduleId: module.id.toString(),
    templateUrl: 'vendor_manage.component.html',
    styleUrls: ['vendor_manage.component.css']
})

export class Vendor_manageComponent implements OnInit {



    constructor(private router: Router , private userService: UserService , private modalService: ModalService) {

    }

    ngOnInit() {
        
    }

    
}