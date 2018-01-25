import { Component, OnInit } from '@angular/core';

import { User } from '../../../_models/index';
import { UserService , ModalService } from '../../../_services/index';
import { Router } from '@angular/router';


@Component({
    moduleId: module.id.toString(),
    templateUrl: 'customer_viewedit.component.html',
    styleUrls: ['customer_viewedit.component.css']
})

export class Customer_vieweditComponent implements OnInit {

	customerinfo : any = {};

    constructor(private router: Router , private userService: UserService , private modalService: ModalService) {

    }

    ngOnInit() {

    	document.getElementById("defaultOpen").click();
        
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
	        tablinks[i].className = tablinks[i].className.replace(" active", "");
	    }
	    document.getElementById(cityName).style.display = "block";
	    evt.currentTarget.className += " active";
    }

    
}