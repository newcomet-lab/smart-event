// core/static.component.ts
import { Component } from '@angular/core';
import { AlertService, AuthenticationService } from '../../_services/index';
import { Router } from '@angular/router';

@Component({
    selector: 'radiotoggle',
    templateUrl: './radiotoggle.component.html',
    styleUrls: ['radiotoggle.component.css']
})
export class RadiotoggleComponent{
 
 radioModel: string = 'customer';

}