// core/static.component.ts
import { Component , Input} from '@angular/core';
import { AlertService, AuthenticationService } from '../../../_services/index';
import { Router } from '@angular/router';

@Component({
    selector: 'small-wrating',
    templateUrl: './small_wrating.component.html',
    styleUrls: ['small_wrating.component.css']
})
export class Small_wratingComponent{

	@Input() rate : Number
 
 	max: number = 5;
  	isReadonly: boolean = true;

}