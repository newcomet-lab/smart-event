import { Component, OnInit } from '@angular/core';

import { User } from '../../../_models/index';
import { UserService } from '../../../_services/index';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'customersjob.component.html',
    styleUrls: ['customersjob.component.css']
})

export class CustomersjobComponent implements OnInit {
    
    model: any= {};

    totalItems = 64;
    currentPage = 4;
    
    constructor(private userService: UserService ,private route: ActivatedRoute,
        private router: Router) {
        
    }

    pageChanged(event: any): void {
      console.log('Page changed to: ' + event.page);
      console.log('Number items per page: ' + event.itemsPerPage);
    }

    ngOnInit() {
        
    }

    dosubmit_propose()
    {
        this.router.navigate(['/vendor/vsubmitproposal']);
    }

}