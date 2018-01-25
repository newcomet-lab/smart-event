// core/static.component.ts
import { Component, Inject, ViewChild, ElementRef } from '@angular/core';
import { AlertService, AuthenticationService } from '../../_services/index';
import { Router } from '@angular/router';

import { DOCUMENT} from '@angular/common';
import { PageScrollConfig, PageScrollService, PageScrollInstance } from 'ng2-page-scroll';
 

@Component({
    selector: 'first-navbar',
    templateUrl: './firstheader.component.html',
    styleUrls: ['firstheader.component.css']
})
export class FirstheaderComponent{
    isIn = false;   // store state

    @ViewChild('container')
    private container: ElementRef;

    constructor(private router: Router , private authService: AuthenticationService, private pageScrollService: PageScrollService, @Inject(DOCUMENT) private document: any) { }

    toggleState() { // click handler
        let bool = this.isIn;
        this.isIn = bool === false ? true : false; 
    }

    logout() {

    	this.authService.logout();
    	this.router.navigate(['/login']);

    }

    gothere(target)
    {
        let pageScrollInstance: PageScrollInstance = PageScrollInstance.newInstance({document: this.document, scrollTarget: target, pageScrollSpeed : 3000});
        this.pageScrollService.start(pageScrollInstance);
    }

}