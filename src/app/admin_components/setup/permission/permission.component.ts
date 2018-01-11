import { Component, OnInit } from '@angular/core';

import { User } from '../../../_models/index';
import { UserService , ModalService } from '../../../_services/index';
import { Router } from '@angular/router';


@Component({
    moduleId: module.id.toString(),
    templateUrl: 'permission.component.html',
    styleUrls: ['permission.component.css']
})

export class PermissionComponent implements OnInit {

	vendorinfo : any = {};

    constructor(private router: Router , private userService: UserService , private modalService: ModalService) {

    }

    ngOnInit() {

    	document.getElementById("defaultOpen").click();
        
    }

    saveVendorPermission(flag, emitter_self, target)
    {
        
        if(flag == 1)
        {
            console.log("normal savevendor!!!");
        }
        else if(flag == 2)
        {
            console.log("normal savevendor!!!");
            this.openTabPage(emitter_self, target);
        }
    }

    saveUserPermission(flag, emitter_self, target)
    {
        
        if(flag == 1)
        {
            console.log("normal savevendor!!!");
        }
        else if(flag == 2)
        {
            console.log("normal savevendor!!!");
            this.openTabPage(emitter_self, target);
        }
    }

    openTabPage(evt, cityName)
    {
        var i, tabcontent, tablinks;
        
            tabcontent = document.getElementsByClassName("tabcontent");
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
            }

        if(cityName.includes("F0") != true)
        {
            tablinks = document.getElementsByClassName("tablinks");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace(" active", "");
            }
        }

        if(cityName.includes("F0") == true)
            cityName = cityName.replace("F0", "");

        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += " active";
    }

    
}