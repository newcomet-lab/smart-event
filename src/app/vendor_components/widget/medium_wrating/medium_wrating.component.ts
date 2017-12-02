// core/static.component.ts
import { Component , Input} from '@angular/core';
import { AlertService, AuthenticationService } from '../../../_services/index';
import { Router } from '@angular/router';

@Component({
    selector: 'medium-wrating',
    templateUrl: './medium_wrating.component.html',
    styleUrls: ['medium_wrating.component.css']
})
export class Medium_wratingComponent{

	@Input() rate : Number
 
 	max: number = 5;
  	isReadonly: boolean = true;

}