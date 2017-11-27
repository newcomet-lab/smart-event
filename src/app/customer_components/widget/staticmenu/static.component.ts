// core/static.component.ts
import { Component } from '@angular/core';
import { AlertService, AuthenticationService } from '../../../_services/index';
import { Router } from '@angular/router';

@Component({
    selector: 'static-navbar',
    templateUrl: './static.component.html'
})
export class StaticComponent{
    isIn = false;   // store state

    constructor(private router: Router , private authService: AuthenticationService) { }

    toggleState() { // click handler
        let bool = this.isIn;
        this.isIn = bool === false ? true : false; 
    }

    logout() {

    	this.authService.logout();
    	this.router.navigate(['/']);

    }

}