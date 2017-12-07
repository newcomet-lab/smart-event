import { Component, OnInit } from '@angular/core';

import { User } from '../../../_models/index';
import { UserService } from '../../../_services/index';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'allcontracts.component.html',
    styleUrls: ['allcontracts.component.css']
})

export class AllcontractsComponent implements OnInit {

	contract_dropdownList = [];
    contract_selectedItems = [];
    contract_dropdownSettings = {};

    milestone_dropdownList = [];
    milestone_selectedItems = [];
    milestone_dropdownSettings = {};

    refund_dropdownList = [];
    refund_selectedItems = [];
    refund_dropdownSettings = {};

    cdr_type: String;
    flag_add : boolean;
    sb_tab : String;

    constructor(private userService: UserService) {

    }

    ngOnInit() {

    	this.cdr_type = "cstartdate";
    	this.flag_add = false;
    	this.sb_tab = "down";

    	this.contract_dropdownList = [
                              {"id":1,"itemName":"All"},
                              {"id":2,"itemName":"Pending"},
                              {"id":3,"itemName":"Active"},
                              {"id":4,"itemName":"Ended"},
                              {"id":5,"itemName":"Paused"}
                            ];
        this.contract_selectedItems = [
                                {"id":3,"itemName":"Active"}
                            ];
        this.contract_dropdownSettings = { 
                                  singleSelection: false, 
                                  text:"Select Contract Status",
                                  selectAllText:'Select All',
                                  unSelectAllText:'UnSelect All',
                                  enableSearchFilter: true,
                                  classes:"mine_multi"
                                };

        this.milestone_dropdownList = [
                              {"id":1,"itemName":"Any"},
                              {"id":2,"itemName":"Active"},
                              {"id":3,"itemName":"Awaiting funding"},
                              {"id":4,"itemName":"Payment requested"}
                            ];
        this.milestone_selectedItems = [
                                {"id":4,"itemName":"Payment requested"}
                            ];
        this.milestone_dropdownSettings = { 
                                  singleSelection: false, 
                                  text:"Select Milestone Status",
                                  selectAllText:'Select All',
                                  unSelectAllText:'UnSelect All',
                                  enableSearchFilter: true,
                                  classes:"mine_multi"
                                };

        this.refund_dropdownList = [
                              {"id":1,"itemName":"Any"},
                              {"id":2,"itemName":"Requested"},
                              {"id":3,"itemName":"Approved"},
                              {"id":4,"itemName":"Not approved"}
                            ];
        this.refund_selectedItems = [
                                {"id":4,"itemName":"Not approved"}
                            ];
        this.refund_dropdownSettings = { 
                                  singleSelection: false, 
                                  text:"Select Escrow Status",
                                  selectAllText:'Select All',
                                  unSelectAllText:'UnSelect All',
                                  enableSearchFilter: true,
                                  classes:"mine_multi"
                                };
        
    }

    oncItemSelect(item:any){
        console.log(item);
        console.log(this.contract_selectedItems);
    }
    OncItemDeSelect(item:any){
        console.log(item);
        console.log(this.contract_selectedItems);
    }
    oncSelectAll(items: any){
        console.log(items);
    }
    oncDeSelectAll(items: any){
        console.log(items);
    }


    onmItemSelect(item:any){
        console.log(item);
        console.log(this.milestone_selectedItems);
    }
    OnmItemDeSelect(item:any){
        console.log(item);
        console.log(this.milestone_selectedItems);
    }
    onmSelectAll(items: any){
        console.log(items);
    }
    onmDeSelectAll(items: any){
        console.log(items);
    }


    oneItemSelect(item:any){
        console.log(item);
        console.log(this.refund_selectedItems);
    }
    OneItemDeSelect(item:any){
        console.log(item);
        console.log(this.refund_selectedItems);
    }
    oneSelectAll(items: any){
        console.log(items);
    }
    oneDeSelectAll(items: any){
        console.log(items);
    }

    
}