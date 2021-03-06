import { Component, OnInit } from '@angular/core';

import { User } from '../../../_models/index';
import { UserService , ModalService } from '../../../_services/index';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'myjobs.component.html',
    styleUrls: ['myjobs.component.css']
})

export class MyjobsComponent implements OnInit {


    constructor(private router: Router , private userService: UserService , private modalService: ModalService) {

    }

    ngOnInit() {
        
    }

    openModal(id: string){
        this.modalService.open(id);
    }

    closeModal(id: string){
        this.modalService.close(id);
    }
    gotoDispute()
    {
        location.href = "/customer/disputeboard";
    }
}