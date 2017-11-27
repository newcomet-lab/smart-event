import { Component, OnInit } from '@angular/core';

import { User } from '../../../_models/index';
import { UserService } from '../../../_services/index';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'storefront.component.html',
    styleUrls: ['storefront.component.css']
})

export class StorefrontComponent implements OnInit {
    currentUser: User;
    users: User[] = [];

    public lineChartData:Array<any> = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
	  ];
	public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
	public lineChartType:string = 'line';
    
    constructor(private userService: UserService) {
        
    }

    ngOnInit() {
        
    }

    public chartClicked(e:any):void {
	    console.log(e);
	}
	 
	public chartHovered(e:any):void {
	    console.log(e);
	}

    
}