import { Component, OnInit } from '@angular/core';

import { User } from '../../../_models/index';
import { UserService } from '../../../_services/index';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'postjob.component.html',
    styleUrls: ['postjob.component.css']
})

export class PostjobComponent implements OnInit {

	jobmodel: any= {};

    constructor(private userService: UserService) {

    }

    ngOnInit() {

    	this.jobmodel.hireway = "one";

    	this.jobmodel.ecategory_dropdownList = [
                              {"id":1,"itemName":"Socials"},
                              {"id":2,"itemName":"Corporate"}
                            ];
        this.jobmodel.ecategory_selectedItems = [];
        this.jobmodel.ecategory_dropdownSettings = { 
                                  singleSelection: false, 
                                  text:"Select Event Category",
                                  selectAllText:'Select All',
                                  unSelectAllText:'UnSelect All',
                                  enableSearchFilter: true,
                                  classes:"mine_multi"
                                };

        this.jobmodel.escategory_dropdownList = [
                              {"id":1,"itemName":"Wedding"},
                              {"id":2,"itemName":"Birthday Parties"},
                              {"id":3,"itemName":"Bridal/Baby Showers"},
                              {"id":4,"itemName":"Engagement"},
                              {"id":5,"itemName":"Ceremony"},
                              {"id":6,"itemName":"Coronation"},
                              {"id":7,"itemName":"Sport events"},
                              {"id":8,"itemName":"Appreciation events"},
                              {"id":9,"itemName":"Holiday Parties"},
                              {"id":10,"itemName":"Milestone celebrations"},
                              {"id":11,"itemName":"Team Building"},
                              {"id":12,"itemName":"Business Dinners"}
                            ];
        this.jobmodel.escategory_selectedItems = [];
        this.jobmodel.escategory_dropdownSettings = { 
                                  singleSelection: false, 
                                  text:"Select Event Details",
                                  selectAllText:'Select All',
                                  unSelectAllText:'UnSelect All',
                                  enableSearchFilter: true,
                                  classes:"mine_multi"
                                };
        
    }

    oneItemSelect(item:any){
        console.log(item);
        console.log(this.jobmodel.ecategory_selectedItems);
    }
    OneItemDeSelect(item:any){
        console.log(item);
        console.log(this.jobmodel.ecategory_selectedItems);
    }
    oneSelectAll(items: any){
        console.log(items);
    }
    oneDeSelectAll(items: any){
        console.log(items);
    }

    onesItemSelect(item:any){
        console.log(item);
        console.log(this.jobmodel.escategory_selectedItems);
    }
    OnesItemDeSelect(item:any){
        console.log(item);
        console.log(this.jobmodel.escategory_selectedItems);
    }
    onesSelectAll(items: any){
        console.log(items);
    }
    onesDeSelectAll(items: any){
        console.log(items);
    }

    
}