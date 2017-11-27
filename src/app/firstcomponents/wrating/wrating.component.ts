// core/static.component.ts
import { Component , Input} from '@angular/core';
import { AlertService, AuthenticationService } from '../../_services/index';
import { Router } from '@angular/router';

@Component({
    selector: 'wrating',
    templateUrl: './wrating.component.html',
    styleUrls: ['wrating.component.css']
})
export class WratingComponent{

	@Input() rate : Number
 
 	max: number = 5;
  	isReadonly: boolean = true;

}