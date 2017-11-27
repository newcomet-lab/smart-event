import { Component, OnInit } from '@angular/core';

import { User } from '../../../_models/index';
import { UserService } from '../../../_services/index';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'setting.component.html',
    styleUrls: ['setting.component.css']
})

export class SettingComponent implements OnInit {
    currentUser: User;
    users: User[] = [];

    rdstatus: any[];

    peditor_flag: boolean;
    
    radioModel: string;

    pricingval: string;
    b_category: string;
    b_location: string;
    b_name: string;
    b_phone: string;
    postal_code: string;

    model: any= {};
    
    constructor(private userService: UserService) {
        
    }

    ngOnInit() {
        this.peditor_flag = false;

        this.rdstatus = [{val : 1} , {val : 1} , {val : 1}];
        document.getElementById("b_name").setAttribute("readonly", "true");
        document.getElementById("b_phone").setAttribute("readonly", "true");
        document.getElementById("postal_code").setAttribute("readonly", "true");

        this.radioModel = "professional";
        this.model.pricingval = "professional";

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

    changestatus(val , flag)
    {
        val++;
        var targetobj;

        switch (flag) {
            case 0:
                targetobj = document.getElementById("b_name");
                break;
            case 1:
                targetobj = document.getElementById("b_phone");
                break;
            case 2:
                targetobj = document.getElementById("postal_code");
                break;
            
            default:
                break;
        }
            

        if(val%2 == 0)
            targetobj.removeAttribute("readonly");
        else
            targetobj.setAttribute("readonly", "true");
        
        //console.log("val : " + this.rdstatus[val%2].val);
        switch (flag) {
            case 0:
                this.rdstatus[0].val = val%2;
                break;
            case 1:
                this.rdstatus[1].val = val%2;
                break;
            case 2:
                this.rdstatus[2].val = val%2;
                break;
            
            default:
                break;
        }
        
        
    }
    
}