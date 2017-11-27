﻿import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AlertService, AuthenticationService } from '../_services/index'



@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router , private authService: AuthenticationService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot ) {

        
        this.authService.isAuthenticated()
            .subscribe(
                    data => {
                        console.log("status :" , data)

                        if(data == true)
                            return true;
                        else
                        {
                            this.router.navigate(['/'], { queryParams: { returnUrl: state.url }});
                            return false;
                        }
                    },
                    error => {
                        
                    });
            return true;
        /*
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;*/
    }
}