import { Component, OnInit } from '@angular/core';

import { User } from '../../../_models/index';
import { UserService } from '../../../_services/index';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'myprofile.component.html',
    styleUrls: ['myprofile.component.css']
})

export class MyprofileComponent implements OnInit {
     
    isOpenfull : boolean;
    wfsort: String;
    ecsort: String;
    
    constructor(private userService: UserService ,private route: ActivatedRoute,
        private router: Router) {
        
    }

    ngOnInit() {
        this.wfsort = "1";
        this.ecsort = "1";
    }
    
    doProfileConfigure()
    {
        this.router.navigate(['/vendor/setting']);
    }

}