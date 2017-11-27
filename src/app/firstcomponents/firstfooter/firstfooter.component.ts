// core/static.component.ts
import { Component } from '@angular/core';
import { AlertService, AuthenticationService } from '../../_services/index';
import { Router } from '@angular/router';

@Component({
    selector: 'first-footer',
    templateUrl: './firstfooter.component.html',
    styleUrls: ['firstfooter.component.css']
})
export class FirstfooterComponent{
    isIn = false;   // store state

    constructor(private router: Router , private authService: AuthenticationService) { }

}