// core/static.component.ts
import { Component ,OnInit , Attribute } from '@angular/core';
import { AlertService, AuthenticationService } from '../../_services/index';
import { Router } from '@angular/router';

@Component({
    selector: 'admin-navbar',
    templateUrl: './adminheader.component.html',
    styleUrls: ['adminheader.component.css']
})
export class AdminheaderComponent implements OnInit{
    isIn = false;   // store state
    memberstatus : String;
    date : any;
    format : any;

    constructor(@Attribute("format") format , private router: Router , private authService: AuthenticationService) {
        this.format = format;
        this.date =  new Date(); 
        
        setInterval(() => {
            this.date =  new Date();
         }, 1000);
        console.log(this.date);
    }

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