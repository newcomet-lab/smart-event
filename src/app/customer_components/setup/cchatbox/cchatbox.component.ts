import { Component, OnInit } from '@angular/core';

import { User } from '../../../_models/index';
import { UserService } from '../../../_services/index';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'cchatbox.component.html',
    styleUrls: ['cchatbox.component.css']
})

export class CchatboxComponent implements OnInit {
    
    model: any= {};
    cu_tab: String;
    
    constructor(private userService: UserService) {
        
    }

    ngOnInit() {

        this.cu_tab="available";
        
    }

    cu_each_setting()
    {
        alert("haha");
    }
    
}