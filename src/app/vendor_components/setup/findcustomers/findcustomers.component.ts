import { Component, OnInit } from '@angular/core';

import { User } from '../../../_models/index';
import { UserService } from '../../../_services/index';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'findcustomers.component.html',
    styleUrls: ['findcustomers.component.css']
})

export class FindcustomersComponent implements OnInit {
    
    model: any= {};

    customebudget : boolean;
    flag_add : boolean;
    isOpenfull : boolean;

    totalItems = 64;
    currentPage = 4;

    location_dropdownList = [];
    location_selectedItems = [];
    location_dropdownSettings = {};

    eventcategory_dropdownList = [];
    eventcategory_selectedItems = [];
    eventcategory_dropdownSettings = {};

    budget_dropdownList = [];
    budget_selectedItems = [];
    budget_dropdownSettings = {};
    
    constructor(private userService: UserService) {
        
    }

    pageChanged(event: any): void {
      console.log('Page changed to: ' + event.page);
      console.log('Number items per page: ' + event.itemsPerPage);
    }

    gotoJobDetails(){
      window.open("vendor/customersjob", "_blank");
    }

    ngOnInit() {

        this.customebudget = false;
        this.flag_add = false;
        this.isOpenfull = false;

       this.location_dropdownList = [
                              {"id":1,"itemName":"India"},
                              {"id":2,"itemName":"Singapore"},
                              {"id":3,"itemName":"Australia"},
                              {"id":4,"itemName":"Canada"},
                              {"id":5,"itemName":"South Korea"},
                              {"id":6,"itemName":"Germany"},
                              {"id":7,"itemName":"France"},
                              {"id":8,"itemName":"Russia"},
                              {"id":9,"itemName":"Italy"},
                              {"id":10,"itemName":"Sweden"}
                            ];
        this.location_selectedItems = [
                                {"id":2,"itemName":"Singapore"},
                                {"id":3,"itemName":"Australia"},
                                {"id":4,"itemName":"Canada"},
                                {"id":5,"itemName":"South Korea"}
                            ];
        this.location_dropdownSettings = { 
                                  singleSelection: false, 
                                  text:"Select Location",
                                  selectAllText:'Select All',
                                  unSelectAllText:'UnSelect All',
                                  enableSearchFilter: true,
                                  classes:"mine_multi"
                                };

        this.eventcategory_dropdownList = [
                              {"id":1,"itemName":"Birthday"},
                              {"id":2,"itemName":"Wedding"},
                              {"id":3,"itemName":"Chrismats"},
                              {"id":4,"itemName":"Candy day"},
                              {"id":5,"itemName":"Choco day"},
                              {"id":6,"itemName":"Sweet day"},
                              {"id":7,"itemName":"1th May"},
                              {"id":8,"itemName":"Canser day"},
                              {"id":9,"itemName":"wowwow"},
                              {"id":10,"itemName":"Hera"}
                            ];
        this.eventcategory_selectedItems = [
                                {"id":2,"itemName":"Wedding"},
                                {"id":9,"itemName":"wowwow"},
                            ];
        this.eventcategory_dropdownSettings = { 
                                  singleSelection: false, 
                                  text:"Select Event",
                                  selectAllText:'Select All',
                                  unSelectAllText:'UnSelect All',
                                  enableSearchFilter: true,
                                  classes:"mine_multi"
                                };


        this.budget_dropdownList = [
                              {"id":1,"itemName":"Any Budget"},
                              {"id":2,"itemName":"Less than $100"},
                              {"id":3,"itemName":"$100 - $500"},
                              {"id":4,"itemName":"$500 - $1k"},
                              {"id":5,"itemName":"$1k - $5k"},
                              {"id":6,"itemName":"Custom"}
                            ];
        this.budget_selectedItems = [
                                {"id":1,"itemName":"Any Budget"}
                            ];
        this.budget_dropdownSettings = { 
                                  singleSelection: false, 
                                  text:"Select Event",
                                  selectAllText:'Select All',
                                  unSelectAllText:'UnSelect All',
                                  enableSearchFilter: true,
                                  classes:"mine_multi"
                                };
        
    }

    onlItemSelect(item:any){
        console.log(item);
        console.log(this.location_selectedItems);
    }
    OnlItemDeSelect(item:any){
        console.log(item);
        console.log(this.location_selectedItems);
    }
    onlSelectAll(items: any){
        console.log(items);
    }
    onlDeSelectAll(items: any){
        console.log(items);
    }


    oneItemSelect(item:any){
        console.log(item);
        console.log(this.eventcategory_selectedItems);
    }
    OneItemDeSelect(item:any){
        console.log(item);
        console.log(this.eventcategory_selectedItems);
    }
    oneSelectAll(items: any){
        console.log(items);
    }
    oneDeSelectAll(items: any){
        console.log(items);
    }


    onbItemSelect(item:any){
        console.log(item);
        if(item.id == 6)
            this.customebudget = true;
        console.log(this.budget_selectedItems);
    }
    OnbItemDeSelect(item:any){
        console.log(item);
        if(item.id == 6)
            this.customebudget = false;
        console.log(this.budget_selectedItems);
    }
    onbSelectAll(items: any){
        console.log(items);
    }
    onbDeSelectAll(items: any){
        console.log(items);
    }
    
}