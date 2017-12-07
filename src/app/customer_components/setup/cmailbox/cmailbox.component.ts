import { Component, OnInit } from '@angular/core';

import { User } from '../../../_models/index';
import { UserService } from '../../../_services/index';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'cmailbox.component.html',
    styleUrls: ['cmailbox.component.css']
})

export class CmailboxComponent implements OnInit {
    
    model: any= {};
    
    constructor(private userService: UserService) {
        
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