import { Component, OnInit } from '@angular/core';

import { User } from '../../../_models/index';
import { UserService } from '../../../_services/index';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'endcontract.component.html',
    styleUrls: ['endcontract.component.css']
})

export class EndcontractComponent implements OnInit {

    ourrate_max = 10;
    ourrate = 0;

    vendorrate_max = 5;
    
    vendorrate_service = 0;
    vendorrate_timeline = 0;
    vendorrate_quality = 0;
    vendorrate_speaking = 0;
    vendorrate_budget = 0;
     

    constructor(private userService: UserService) {

    }

    ngOnInit() {

        
    }


}