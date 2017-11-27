import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService, UserService, AuthenticationService } from '../../_services/index';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'register.component.html',
    styleUrls: ['register.component.css']
})

export class RegisterComponent {

    private LOGO = require("assets/images/testlogo.png");
    
    model: any = {};
    loading = false;

    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService,
        private authService: AuthenticationService) { }

    register() {
        this.loading = true;
        this.authService.registerWithEmailAndPassword(this.model.email, this.model.password)
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}
