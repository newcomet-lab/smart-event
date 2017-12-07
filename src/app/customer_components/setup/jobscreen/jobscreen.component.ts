import { Component, OnInit } from '@angular/core';

import { User } from '../../../_models/index';
import { UserService } from '../../../_services/index';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'jobscreen.component.html',
    styleUrls: ['jobscreen.component.css']
})

export class JobscreenComponent implements OnInit {


    constructor(private userService: UserService) {

    }

    ngOnInit() {
        document.getElementById("iv").setAttribute('class','tablinks active');

    }

    openTabPage(evt, cityName)
    {
    	var i, tabcontent, tablinks;
	    tabcontent = document.getElementsByClassName("tabcontent");
	    for (i = 0; i < tabcontent.length; i++) {
	        tabcontent[i].style.display = "none";
	    }
	    tablinks = document.getElementsByClassName("tablinks");
	    for (i = 0; i < tablinks.length; i++) {
	        //tablinks[i].className = tablinks[i].className.replace(" active", "");
	        tablinks[i].setAttribute('class','tablinks');
	    }
	    document.getElementById(cityName).style.display = "block";
	    console.log(evt.currentTarget.getAttribute('class'));
	    evt.currentTarget.setAttribute('class','tablinks active');
	    //evt.currentTarget.addClass('active');
    }

    openTabPagebytext(evt, cityName)
    {
    	var i, tabcontent, tablinks;
	    tabcontent = document.getElementsByClassName("tabcontent");
	    for (i = 0; i < tabcontent.length; i++) {
	        tabcontent[i].style.display = "none";
	    }
	    tablinks = document.getElementsByClassName("tablinks");
	    for (i = 0; i < tablinks.length; i++) {
	        //tablinks[i].className = tablinks[i].className.replace(" active", "");
	        tablinks[i].setAttribute('class','tablinks');
	    }
	    document.getElementById(cityName).style.display = "block";
	    
	    document.getElementById(evt).setAttribute('class','tablinks active');
	    //evt.currentTarget.addClass('active');
    }

    
}