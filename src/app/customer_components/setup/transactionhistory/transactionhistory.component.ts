import { Component, OnInit } from '@angular/core';

import { User } from '../../../_models/index';
import { UserService } from '../../../_services/index';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'transactionhistory.component.html',
    styleUrls: ['transactionhistory.component.css']
})

export class CustomertransactionhistoryComponent implements OnInit {

	  public transactionarr:Array<string> = ['All Transactions', 'Debits', 'Credits', 'Bonuese',
    'Adjustments', 'Withdrawals', 'Expense'];

    public vendorsarr:Array<string> = ['All Vendors', 'Marji', 'Thomas', 'James',
    'Timkern'];

    private transaction_val:any = {};
    private vendor_val:any = {};
    private _disabledV:string = '0';
    private disabled:boolean = false;

    constructor(private userService: UserService) {

    }

    ngOnInit() {

        
    }
 
    public trefreshValue(value:any):void {
      this.transaction_val = value;
    }
    public vrefreshValue(value:any):void {
      this.vendor_val = value;
    }

}