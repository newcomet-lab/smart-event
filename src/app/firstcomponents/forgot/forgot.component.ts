﻿import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService, AuthenticationService } from '../../_services/index';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'forgot.component.html',
    styleUrls: ['forgot.component.css']
})

export class ForgotComponent implements OnInit {

    public LOGO = require("assets/images/testlogo.png");

    model: any = {};
    loading = false;
    returnUrl: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService) { }

    ngOnInit() {
        // reset login status
        //this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

    }

    loginWithGoogle(){
        this.authenticationService.loginWithGoogle()
                   .then((res) => { 
                              this.router.navigate([this.returnUrl]);
                                console.log(this.returnUrl, res);
                            })
                          .catch((err) => {
                              this.alertService.error(err);
                                this.loading = false;
                          });
                        }

    login(){

        this.loading = true;
        this.authenticationService.login(this.model.email, this.model.password)
                .subscribe(
                    data => {
                        this.router.navigate(['/customer/home']);
                        console.log('/customer/home', data);
                        //this.router.navigateByUrl('/home');
                    },
                    error => {
                        this.alertService.error(error);
                        this.loading = false;
                    });
    }
    
}
