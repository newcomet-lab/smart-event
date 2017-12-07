// core/static.component.ts
import { Component ,OnInit } from '@angular/core';
import { AlertService, AuthenticationService } from '../../_services/index';
import { Router } from '@angular/router';

@Component({
    selector: 'customer-navbar',
    templateUrl: './customerheader.component.html',
    styleUrls: ['customerheader.component.css']
})
export class CustomerheaderComponent implements OnInit{
    isIn = false;   // store state
    memberstatus : String;

    constructor(private router: Router , private authService: AuthenticationService) { }

    toggleState() { // click handler
        let bool = this.isIn;
        this.isIn = bool === false ? true : false; 
    }

    ngOnInit() {
        this.memberstatus="online";
    }

    logout() {

    	this.authService.logout();
    	this.router.navigate(['/login']);

    }

}